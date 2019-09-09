/**
 * Created with jing.zhao2013
 * Date: 14-3-14
 * Time: 下午4:37
 */
jQuery(function($){
    var paramQuestionId = new Array();
    var paramPsqId = new Array();
    var paramAnswer = new Array();
    var paramDuration = new Array();
	
    var testType=$("#testType").val(),examType=1;
    if(testType=="fuxi"){
        examType=1;
    }else{
        examType=2;
    }
    var totalSecond = $("#total").val();
//    给body加样式
    $("body").addClass("sub");
//    给计时器加样式
    if(parseInt($("#total").val())<=10*60){
        $(".time").addClass("time-red");
    }
//    左边固定位置
    $("#fixed").fixUp({
        left:function(){return ($(window).width()-990)/2;}
    });
    var overTimeStatus = false;
//    超时后启动计时器
    var overTime=new Calculagraph({
        dom:$("#countDown").get(0)
        ,fn:function(){}
    });
    
//  超时后刷新启动计时器
    var overTimeRefresh=new Calculagraph({
        dom:$("#countDown").get(0)
        ,fn:function(){},time:totalSecond
    });
    
//    倒计时器组件
    var countdown=new CountDown({
        dom:$("#countDown").get(0)
        ,totalSecond:parseInt($("#total").val())
        ,auto:true
        ,fn:function(){
            if(countdown.totalSecond<=10*60){
                $(".time").addClass("time-red");
            }
        }
        ,zeroFn:function(){//这个方法是当计时器时间为0后触发的方法
            if(examType=="2"){
//                var url = $("#putIn").attr("data");
            	overTimeStatus = true;
                $("#putIn").click();
               //  window.location.href=url;
            }else if(examType=="1"){
            	putInDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
                putInDialog.open('<div class="tisi f16 acenter">考试时间已到，你是否要提交考卷？</div>');
                countdown.stop();
                sigleTime.stop();
            }
        },lowerFn:function(){
        	if(totalSecond<0){
                $("#countDown").prev().text("已超时");
                overTimeRefresh.start();
            }else{
                countdown.start();
            }
        }
    });
    
//  点击题目答案内容
    $("ul.grays li").bind({
        click:function(){
            var pDom=$(this).parent();
            var i = pDom.find("li").index($(this));
            var nextDom=pDom.next().find(".font-color");
            nextDom.eq(i).trigger("click");
            
            var data = $(this).attr("data").split(",");
            
            
            //如果多选，则改为反向状态，否则先清除所有的数据，再改为反向状态
           if(data[0]>1){
        	 var isChecked = $(this).find("input[type=checkbox]").is(':checked');
          	 if(isChecked){
          		 $(this).find("input[type=checkbox]").removeAttr("checked");
          	 }else{
          		 $(this).find("input[type=checkbox]").attr("checked","checked");
          	 }
           }else{
        	   var _this = $(this).find("input[type=radio]")
               if(_this.attr("data-ischecked")=="1"){
                   _this.prop("checked",false);
                   _this.attr("data-ischecked","0").parents("li").siblings().find("input[type=radio]").attr("data-ischecked","0")
               }else{
                   _this.prop("checked","checked")
                   _this.attr("data-ischecked","1").parents("li").siblings().find("input[type=radio]").attr("data-ischecked","0")
               }
           }
        },
        mouseenter:function(){
//            给鼠标悬停选项选项相应的答案内容加样式
            var pDom=$(this).parent();
            var i = pDom.find("li").index($(this));
            var nextDom=pDom.next().find(".font-color");
            nextDom.eq(i).trigger("mouseenter");
        },
        mouseleave:function(){
//            给鼠标移出选项选项相应的答案内容加样式
            var pDom=$(this).parent();
            var i = pDom.find("li").index($(this));
            var nextDom=pDom.next().find(".font-color");
            nextDom.eq(i).trigger("mouseleave");
        }
    });
    
  //点击checkbox的时候，触发li会把勾选的数据给清除掉，这里首先做一下反向操作
    $("ul.grays li input:checkbox").bind({
        click:function(){
            var isChecked = $(this).is(':checked');
            
          	 if(isChecked){
          		 $(this).removeAttr("checked");
          	 }else{
          		 $(this).attr("checked","checked");
          	 }
        }
    });
 
//  试题纠错弹出窗口
    var correctionDialog = $("#reminderDialog").dialog({
        isModal:true,
        btn:[{ele:$("#submitBtn"),fn:function(){
        	var questionId =$("#questionId").val();
        	var questionType =$("#questionType").val();
        	var content =getContent();
        	var basePath =$("#basePath").val();
        	var examType =$("#examType").val();
        	var outlineCode =$("#outlineCode").val();
        	var title = $("#title").val();
        	var slotsType = $("input[name='slotsType']:checked").val();
        	if(slotsType == undefined && (content =='<p style="color:silver">在这里填入问题详情。</p>' || content =='在这里填入问题详情。' || content.trim() =='' || content.trim() == '<p>　</p>')){
        		$("#showNullCorrection").html("* 请完整填写问题类型和问题描述！");
        		return;
        	}else{
        		$("#showNullCorrection").html("* ");
        	}
        	if(slotsType == undefined || slotsType == ""){
        		$("#showNullCorrectionType").html("* 请选择问题类型！");
        		return;
        	}else{
        		$("#showNullCorrectionType").html("");
        	}
        	if(content =='<p style="color:silver">在这里填入问题详情。</p>' || content.trim() == '<p>　</p>' || content =='在这里填入问题详情。' || content.trim() == ""){
        		$("#showNullCorrection").html("* 请描述本题的错误！");
        		return;
        	}
        	 //保存纠错内容
            $.ajax({
            	url:basePath+"question/correction/"+questionType+"/"+questionId,
            	type:'POST',
            	data:{content:content,outlineCode:outlineCode,examType:examType,title:title,type:slotsType},
            	dataType:'json',
            	contentType: "application/x-www-form-urlencoded; charset=utf-8", 
            	success:function(data){
            		alertDialogs.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
            		alertDialogs.open('<div class="tisi acenter strong">'+data.msg+'</div>');
            	},
            	error:function(data){
            		alert("吐槽提交失败,请检查网络！");
            	}
            });
            correctionDialog.close();
            
        	
        }},{ele:$("#returnBtn"),fn:function(){
        	correctionDialog.close();
            if(countdown.totalSecond<=0){
                overTime.start();
            }else{
                countdown.start();
            }
            sigleTime.start();
            }}]
    });
//  试题纠错
    $("a[id^='correctionStop']").click(function(){
    	var data =  $(this).attr("data").split(","); 
     	$("#questionId").val('');
    	$("#questionId").val(data[1]);
    	$("#questionType").val('');
    	$("#questionType").val(data[2]);
    	var ue = UE.getEditor('myEditor');
    	ue.setContent('<p style="color:silver">在这里填入问题详情。</p>');
    	ue.addListener("focus", function(){  
    		if(ue.getContent() == '<p style="color:silver">在这里填入问题详情。</p>'){
    			ue.setContent('');
    		} 
        });  
        //文本框是去焦点时,若内容为空则显示默认显示的内容  
    	ue.addListener("blur", function(){  
            if(!ue.getContent()){  
            	ue.setContent('<p style="color:silver">在这里填入问题详情。</p>');  
            }  
        });
    	$("#basePath").val('');
    	$("#basePath").val(data[0]);
        if(countdown.totalSecond<=0){
            overTime.stop();
        }else{
            countdown.stop();
        }
        sigleTime.stop();
        $("#showNullCorrection").html("*");
        correctionDialog.setPosition({"left":$(window).width()/2-300,"top":$(window).scrollTop()+$(window).height()/2-200});
        correctionDialog.open();
    });
    //消息弹出框
    var alertDialogs = $("#alertDialog").dialog({
    	 isModal:true,
         btn:[{ele:$("#closeDialog"),fn:function(){
        	 
        	 alertDialogs.close();
             if(countdown.totalSecond<=0){
                 overTime.start();
             }else{
                 countdown.start();
             }
             sigleTime.start();
         }}]
    });
    
    $(document).on('click','.custom-label>img',function(){
 	   addCollectionLable();
    });
    
//    休息一下弹出窗口
    var waitDialog = $("#waitDialog").dialog({
        isModal:true,
        btn:[{ele:$("#timeStrat"),fn:function(){
            $("#timeStop").removeClass("active-blue-btn");
            waitDialog.close();
            if(countdown.totalSecond<=0){
                overTime.start();
            }else{
                countdown.start();
            }
            sigleTime.start();
        }}]
    });
//    点击休息一下按钮
    $("#timeStop").click(function(){
        $(this).addClass("active-blue-btn");
        if(countdown.totalSecond<=0){
            overTime.stop();
        }else{
            countdown.stop();
        }
        sigleTime.stop();
        waitDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
        waitDialog.open();
    });
    var addParamQuestionId = function(v){
    	var questionId =paramQuestionId;
    	questionId.push(v);
    };
    var addParamPsqId = function(v){
    	var psqId = paramPsqId;
    	psqId.push(v);
    };
    var addParamAnswer = function(v){
    	var answer = paramAnswer;
//    	alert(answer+","+v);
    	answer.push(v);
    };
    var addParamDuration = function(v){
    	var duration = paramDuration;
    	duration.push(v);
    };
    var clearCache = function(deleteSize) {
    	  paramQuestionId.splice(0,deleteSize);
    	  paramPsqId.splice(0,deleteSize);
    	  paramAnswer.splice(0,deleteSize);
    	  paramDuration.splice(0,deleteSize);
    };
    
    var removeLastIndexCache = function(){
    	paramQuestionId.pop();
    	paramPsqId.pop();
    	paramAnswer.pop();
    	paramDuration.pop();
    }
    
//    记录每道题的时间
    var sigleTime=new Calculagraph();
    var lastData =[];
    var lastAnswers = [];
    var lastTime =0;
    var lastP  = null;
    sigleTime.start();
//    点击题目选项ABCD,多选
    $(".sec3").find(".font-color").bind({
        click:function(){
        	var data = $(this).parent().attr("data").split(",");
        	var $curUl=$(this).parent().parent();
        	//从后台取得的数据,其中data[4]为第几题,为了给答题卡加样式
        	var pi=data[4]-1;
        	if(data[5]>1){
        		//给当前选项ABCD添加样式
                $(this).toggleClass("green");
                var flag=$curUl.find(".font-color").hasClass("green");//用于判断此题是否有选项
                //题目左上角样式变化,和答题卡样式变化
                if(flag){
                    $curUl.parent().find(".img1").removeClass("img2");
                    $("#cardNum").find("li").eq(pi).addClass("on");
                }else{
                    $curUl.parent().find(".img1").addClass("img2");
                    $("#cardNum").find("li").eq(pi).removeClass("on");
                }
        	}else{
				$(this).toggleClass("green");
				var flag=$curUl.find(".font-color").hasClass("green");//用于判断此题是否有选项
				if(flag){
					$curUl.find(".font-color").removeClass("green");
	        		$(this).addClass("green");
				    $curUl.parent().find(".img1").removeClass("img2");
				    $("#cardNum").find("li").eq(pi).addClass("on");
				}else{
				    $curUl.parent().find(".img1").addClass("img2");
				    $("#cardNum").find("li").eq(pi).removeClass("on");
				}
        	}
        	
            //  题号"1,2,2"
            var uAnswers=[];
            $curUl.find(".font-color").each(function(i,e){
                if($(e).hasClass("green")){
                    uAnswers.push($(e).children(":last").attr("data"));
                }
            });
            recordProperty();
            param();
            
            if(lastData!=''&&lastData[2]!=data[2]){
            	
            	lastData = data;
            	lastAnswers = uAnswers;
            	lastTime = sigleTime.time;
            	
            }else{
            	removeLastIndexCache();
            	lastData = data;
            	lastAnswers = uAnswers;
            	lastTime += Number(sigleTime.time);
            }
            sigleTime.time=0;
        },
        mouseenter:function(){
//            给鼠标悬停选项选项相应的答案内容加样式
            var $curUl=$(this).parent().parent();
            var i=$curUl.find(".font-color").index($(this));
            var $answer=$curUl.parent().find("ul.grays li");
            $curUl.find("dd").removeClass("on");
            $(this).parent().addClass("on");
            $answer.removeClass("on");
            $answer.eq(i).addClass("on");
        },
        mouseleave:function(){
//            给鼠标移出选项选项相应的答案内容加样式
            var $curUl=$(this).parent().parent();
            $curUl.find("dd").removeClass("on");
            $curUl.parent().find("ul.grays li").removeClass("on");
        }
    });
    
    var param = function(){
    	  var p = $.param({ psqId:paramPsqId, uAnswers:paramAnswer, time:paramDuration}, true);
          lastP  = p;
    }
    var recordProperty = function(){
    	
    	addParamQuestionId(lastData[2]);
        addParamPsqId(lastData[3]);
        addParamAnswer(lastAnswers.join(","));
        addParamDuration(lastTime);
    }
    

//  我要交卷弹出窗口
    var putInDialog = $("#putInDialog").dialog({
        isModal:true,
        btn:[{ele:$("#putInBtn"),fn:function(){
                var url=$("#putIn").attr("data");
                //putInDialog.close();
     			submitPaper(url);
//                window.location.href=url;
                
//                var basePath = $("#basePath").val();
//                var verifyCode = $("#verifyCode").val(); 
                //var slideStatus = $("#sliderStatus").val();
                //校验验证码是否正确
//                $.ajax({
//                   	url:basePath+"judgeVerCodeIsCorrect?verifyCode="+verifyCode,
//                   	type:'POST',
//                   	dataType:'json',
//                   	contentType: "application/x-www-form-urlencoded; charset=utf-8",
//                   	success:function(data){
//                   		if(data.result){
                       /*2018.7.23 去掉滑块  if(slideStatus == 1){
                        	 putInDialog.close();
                 			submitPaper(url);
                 			$("#sliderStatus").val(0)
                 		}else{
                 			$("#okSlider").hide();
           					$("#cancelSlider").show();
                 		}*/
//                   		}else{
//                   			$("#verifyCodeError").show();
//                   			$("#kaptchaExam").click();
//                   		}
//                   	},
//                   	error:function(data){
//                   		returnDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
//                   		returnDialog.open('<div class="tisi acenter strong">网络出现问题，请再次尝试！</div>');
//                   	}
//                   });
                
                return false;
            }},{ele:$("#continueBtn"),fn:function(){
                $("#putIn").removeClass("active-blue-btn");
                putInDialog.close();
//                $("#verifyCodeError").hide();
//                $("#verifyCode").val('');
                /*$("#okSlider").hide();
				$("#cancelSlider").hide();
				$("#sliderStatus").val(0)*/
				
                if(countdown.totalSecond<=0){
                    $("#countDown").prev().text("已超时");
                    overTime.start();
                }else{
                    countdown.start();
                }
                sigleTime.start();
            }}
        ]
    });
    
 // 交卷弹出窗口
    var testDialog = $("#testDialog").dialog({
    	 isModal:true,
         btn:[{ele:$("#closeReturnDialog"),fn:function(){
        	 
        	 var returnStatus = $("#returnStatus").val();
        	 var returnBackUrl = $("#returnBackUrl").val();
        	 
        	//成功交卷后，给跳转id赋值，防止弹出提示框
        	 $('#isJumpToUrl').val('true');
        	 
        	 if(returnStatus=='true'&&returnBackUrl.length>0){
        		 window.location.href = returnBackUrl;
        		 testDialog.close();
        	 }else{
        		 testDialog.close(); 
        	 }
        	  if(countdown.totalSecond<=0){
                  $("#countDown").prev().text("已超时");
                  overTime.start();
              }else{
                  countdown.start();
              }
              sigleTime.start();
         }}]
    });
    
//    我要交卷
    $("#putIn").click(function(){
    	
    	//首先提交最后一个试题
    	if(lastData!=''){
    		  recordProperty();
              param();
              var nowQuestionIdLength = paramQuestionId.length;
    		$.ajax({
    			url:lastData[0]+"question/answer/"+lastData[1]+"/"+paramQuestionId,
    			type:'POST',
    			data:lastP,
    			dataType:'json',
    			traditional:true,
    			async:false,  
    			success:function(data){
    				if(!data.result){
    					location.href = data.gobackUrl;
    				}else{
    					//清除已经提交的试题信息
                  		clearCache(nowQuestionIdLength);
                  		
    					//提交成功后提交试卷
    			        $(this).addClass("active-blue-btn");
    			        submitTotalPaper();
    				}
    			},
    			error:function(data){
    				$("#returnBackUrl").val('');
              		$("#returnStatus").val(false);
              		testDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
              		testDialog.open('<div class="tisi acenter strong"  style="color:red">您的网络连接极不稳定，影响到试题答案正常提交，请先解决网络问题或待网络稳定后（即该提示不再出现）继续答题。</div>');
    			}
    		});
    	}else{
    		//提交成功后提交试卷
	        $(this).addClass("active-blue-btn");
	        submitTotalPaper();
    	}
    	
  
    });
    
    //正式提交试卷
    var submitTotalPaper = function(){
        var url=$("#putIn").attr("data");
        var len = $("#cardNum").find("li.on").length;
        var len1 = $("#cardNum").find("li").length;
        var confirmMsg = showMsg(len,len1,0,0);
        var basePath = $("#basePath").val();
        if(countdown.totalSecond<=0){
            overTime.stop();
        }else{
            countdown.stop();
        }
        sigleTime.stop();
        if(confirmMsg.length>0 && !overTimeStatus){
            putInDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
            $("#kaptchaId").show();
            $("#showTipMsg").html(confirmMsg);
            $("#verifyCode").val('');
            //resetSlider();
            putInDialog.open();
        }else{
        	//后台判断是否需要弹出验证码
       	 $.ajax({
              	url:basePath+"judgeIsNeedVerCode",
              	type:'POST',
              	dataType:'json',
              	contentType: "application/x-www-form-urlencoded; charset=utf-8",
              	success:function(data){
              		if(data.result){
              		 $("#kaptchaId").show();
                    $("#showTipMsg").html('');
                    //resetSlider();
                    putInDialog.open();
              		}else{
              			submitPaper(url);
              		}
              	},
              	error:function(data){
              		returnDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
              		returnDialog.open('<div class="tisi acenter strong">网络出现问题，请再次尝试！</div>');
              	}
              });
        }
    }
    //交卷
    var submitPaper = function(url){
    	putInDialog.close();
    	waitDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
    	$("#timeStrat").hide();
    	waitDialog.open('<div class="tisi acenter strong">交卷中。。。。</div>');
    	
    	  $.ajax({
            	url:url,
            	type:'POST',
            	dataType:'json',
            	contentType: "application/x-www-form-urlencoded; charset=utf-8",
            	timeout : 180000, //超时时间设置，单位毫秒
            	success:function(data){
            		
            		$("#returnBackUrl").val(data.gobackUrl);
            		$("#returnStatus").val(data.result);
            		waitDialog.close();
            		testDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
            		testDialog.open('<div class="tisi acenter strong">'+data.msg+'</div>');
			         
            	},
            	complete : function (XMLHttpRequest, status){ // 请求完成后最终执行参数
    			    if (status == 'timeout')
    			    {// 超时,status还有success,error等值的情况
    			    	waitDialog.close();
    			    	putInDialog.close();
    			    	returnDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
    	          		returnDialog.open('<div class="tisi acenter strong">您的网络状况不是很理想，无法完成交卷！</div>');
    			    }
    		    },
            	error:function(data){
            		$("#returnBackUrl").val('');
            		$("#returnStatus").val(false);
            		waitDialog.close();
            		testDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
            		testDialog.open('<div class="tisi acenter strong">网络出现问题，请再次尝试！</div>');
            	}
            });
    }
    
    //1分钟提交一次试题答案
    setInterval(
        	function(){
        	 if(paramQuestionId.length>0){
        		var nowQuestionIdLength = paramQuestionId.length;
        		
        			$.ajax({
            		url:lastData[0]+"question/answer/"+lastData[1]+"/"+paramQuestionId,
            		type:'POST',
            		data:lastP,
            		dataType:'json',
            		traditional:true,
            		async:false,  
            		success:function(data){
            			//清除已经提交的试题信息
            			clearCache(nowQuestionIdLength);
            		},
            		error:function(data){
            			$("#returnBackUrl").val('');
                  		$("#returnStatus").val(false);
                  		testDialog.setPosition({"left":$(window).width()/2-250,"top":$(window).scrollTop()+$(window).height()/2-180});
                  		testDialog.open('<div class="tisi acenter strong"  style="color:red">您的网络连接极不稳定，影响到试题答案正常提交，请先解决网络问题或待网络稳定后（即该提示不再出现）继续答题。</div>');

            		}
            	});
        		}
        	}	
        	, 
    	60*1000);

//    右侧滚动条滚动时，弹出窗口随之滚动
    $(window).scroll(function(){
        var l=$(this).width()/2-250;
        var t=$(this).scrollTop()+$(this).height()/2-180;
        waitDialog.setPosition({"left":l,"top":t});
        putInDialog.setPosition({"left":l,"top":t});
    });
    
    /**
     * 删除左右两端的空格
     */
     String.prototype.trim=function()
     {
          return this.replace(/(^\s*)|(\s*$)/g, '');
     }
     
   //加载完页面后移除checkbox的禁用项
     try{
	    $("input[type=checkbox]").removeAttr("disabled");
	    $("input[type=radio]").removeAttr("disabled");
	    }catch(e){}
	    
	    
	    $("#isOpenTiming").click(function(){
	    	var isOpenTiming = $("#isOpenTiming").attr("checked");
	    	var isOpenStatus = (isOpenTiming=="checked")?1:0;
	    	var basePath = $("#basePath").val();
	    	 $.ajax({
	         	url:basePath+"modifyUserOpenStatus",
	         	type:'POST',
	         	data:{'isOpenStatus':isOpenStatus},
	         	dataType:'json',
	         	success:function(data){
	         		if(data.result){
	         			if(isOpenStatus==1){
	         				countdown.totalSecond = data.temp;
	         				if(countdown.totalSecond<=0){
	         		            overTime.start();
	         		        }else{
	         		            countdown.start();
	         		        }
	         		        sigleTime.start();
	         			}else{
	         				 if(countdown.totalSecond<=0){
	         			        overTime.stop();
	         			    }else{
	         			        countdown.stop();
	         			    }
	         			    sigleTime.stop();
	         			}
	         		}else{
	         			alert("修改失败,请检查网络！");
	         		}
	         	},
	         	error:function(data){
	         		alert("修改失败,请检查网络！");
	         	}
	         });
	    })
});


function getContent() {
    return UE.getEditor('myEditor').getContent();
}