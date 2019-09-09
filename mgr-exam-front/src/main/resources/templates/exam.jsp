<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0098)http://tiku.ekgc.cn/testing/customExam/preview/51565648?token=28bdf22d-14e2-4e75-b6a9-610aea731c89 -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	
    <title>预览试卷</title>
    
    <link rel="stylesheet" type="text/css" href="./files/kaoshi.css">
    <script type="text/javascript" src="./files/jquery-1.8.3.min.js.下载"></script>
    <script type="text/javascript" src="./files/jquery.md5.js.下载"></script>
    <script type="text/javascript" src="./files/btn.js.下载"></script>
    
    <style>
    	input[name^='Answer']{
    		display: none;
    	}
    </style>
  </head>
  <body style="background-color: #e2e0e2;" class="sub">
    <!-- header -->
    <div id="mytop" class="yui3-g wrap">
    	<div class="yui3-u-1 whites content post">
        	
            <div class="top" style="text-align: center; line-height: 100px; font-size: 30px; background:url(images/logo_bg.jpg) no-repeat 20px; ">
            	
            	${paper.name}
            </div>
        </div>
    </div>
    <!-- header -->
    
    <!-- content -->
    <div class="yui3-g wrap">
    	<div class=" whites content">
            <div class="yui3-u-1-5 top15">
                <div id="fixed">
                    <div class="time blue acenter">
                        <p class="f14">考试剩余时间</p>
                        <span id="countDown">120:00</span>
                    </div>
                    <input type="hidden" value="3600" id="total">
                    <a id="timeStop" href="javascript:void(0);" title="" class="rest acenter" style="display: none;">休息一下</a>
                    
                </div>
            </div>
            
            <div class="yui3-u-4-5 top15">
                <div class="sub-top align-left">&nbsp;请完成下列1~${size}道选择题，针对每一道题目，所有答案都选对，则该题得分，所选答案错误或不能选出所有答案，则该题不得分。每道题均为3分。</div><!-- 该段题目 -->
                    <form id="examForm" action="examSubject" method="post">
                    <c:forEach items="${subjects}" var="subject" varStatus="status">
                    	<div class="sec post ">
                        <div class="sec2 grays" id="Answer${status.index+1}"><pre><img src="./${subject.trunk_pic }"> (选择${fn:length(subject.answer)}项)</pre>
                        	</div>
                       
                        <div class="img1 img2  font-yahei ">${status.index+1}</div>
                        <ul class="sec2 grays answers" icnt="${fn:length(subject.answer)}">
	                            <!-- 纵向答案 -->
								<li><input type="checkbox" id="Answer${status.index+1}a" name="Answer${status.index+1}" value="a" /><label for="Answer${status.index+1}a" ><pre><span>A:</span><img style="vertical-align:middle" src="./${subject.answer_a_pic}"></pre></label></li>
	                            <li><input type="checkbox" id="Answer${status.index+1}b" name="Answer${status.index+1}" value="b" /><label for="Answer${status.index+1}b" ><pre><span>B:</span><img style="vertical-align:middle" src="./${subject.answer_b_pic}"></pre></label></li>
	                            <li><input type="checkbox" id="Answer${status.index+1}c" name="Answer${status.index+1}" value="c" /><label for="Answer${status.index+1}c" ><pre><span>C:</span><img style="vertical-align:middle" src="./${subject.answer_c_pic}"></pre></label></li>
	                            <li><input type="checkbox" id="Answer${status.index+1}d" name="Answer${status.index+1}" value="d" /><label for="Answer${status.index+1}d" ><pre><span>D:</span><img style="vertical-align:middle" src="./${subject.answer_d_pic}"></pre></label></li>
	                            </ul>
	                        <dl class="sec3 font-yahei f16">
<!-- 	                            横向选项 -->
	                            </dl>
                        </div>
                <!-- 该段题目 -->
                    </c:forEach>
                    
                 
                        <div>
                        <a id="putIn" href="javascript:submit();" class="rest acenter pater">我 要 交 卷</a>
                        <!-- <input value="提交" type="submit"/> -->
                        </div>
                        </form>
                <!-- 	                主观题 -->
	                 </div>
	                 
        	   
        </div>
    </div>
    <!-- content -->
<!-- js相关 -->
<script type="text/javascript" src="./files/dialog.js"></script>
<script type="text/javascript" src="./files/countdown.js"></script>
<script type="text/javascript" src="./files/calculagraph.js"></script>
<script type="text/javascript" src="./files/myexam.js"></script>
<link rel="stylesheet" type="text/css" href="./files/base.css">
<link rel="stylesheet" type="text/css" href="./files/font.css">
<link rel="stylesheet" type="text/css" href="./files/grid.css">
<link rel="stylesheet" type="text/css" href="./files/reset.css">
<link rel="stylesheet" type="text/css" href="./files/common.css">
<link rel="stylesheet" type="text/css" href="./files/themes.css">
<link rel="stylesheet" type="text/css" href="./files/style.css">
<script type="text/javascript" src="./files/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="./files/backBtn.js"></script>
<script type="text/javascript">

	$(".answers input[type=checkbox]").click(function(){
		if($(this).prop("checked") == true){
			$(this).next().find("span").css("color","black");
			$(this).parents("li").css("background-color","#8da905");
		}else{
			$(this).next().find("span").css("color","gray");
			$(this).parents("li").css("background-color","white");
		}
		
		//alert("----");
	});
	var isForceSubmit = false;
	$("#examForm").submit(function(){
		if(isForceSubmit){
			return true;
		}
		var isSubmit = true;
		$(this).find(".answers").each(function(index,ele){
			//console.info(index);
			//console.info(ele.innerHTML);
			var cnt = 0;
			$(ele).find("input").each(function(i,cb){
				if($(cb).prop("checked")==true){
					cnt++;
				}
			});
			//console.info(cnt);
			var icnt =$(ele).attr("icnt");
			console.info(parseInt(icnt));
			if(parseInt(icnt) > cnt){
				alert("第" + (index+1) + "题需要选择" + icnt + "项(少选了)");
				isSubmit = false;
				return false;
			}else if(parseInt(icnt) < cnt){
				alert("第" + (index+1) + "题只需选择" + icnt + "项(选多了)");
				isSubmit = false;
				return false;
			}
		});
		
		return isSubmit;
	});
	
	function submit(){
		$("form").submit();
	}
	var m=${paper.length}; 
	var s=0;
	(function transTime(){
		/* var t = $("#countDown").text();
        var m=120;
        var min=parseInt(t/m);
        var sec=t-min*m;
        var minute=(min<10)?"0"+min:min;
        var second=(sec<10)?"0"+sec:sec; */
        --s;
        if(s<0){
        	s=59;
        	--m;
        }
        var minute=(m<10)?"0"+m:m;
        var second=(s<10)?"0"+s:s;
        $("#countDown").text(minute+":"+second);
        if(m==0 && s==0){
        	isForceSubmit = true;
        	submit();
        	//alert("时间到！自动提交");
        }else{
        	setTimeout(transTime,1000);
        }
        
	})();
	
</script>
<!-- footer -->
    <div>
    </div>
    
    <!-- <div class="yui3-g wrap">
        <div class="yui3-u-1 content footer-bg"></div>
        <div class="yui3-u-1 acenter footer footer-new content">
            Copyright ©  2014   北京阿博泰克北大青鸟信息技术有限公司
        </div>
    </div> -->
    
    <!-- footer -->
    <a id="backTop" href="javascript:void(0);" title="回顶部" class="top-img" style="display: none; position: fixed; left: 1190.5px; top: 447px;"><span>回顶部</span></a>
    <script type="text/javascript" src="./files/all.js"></script>
  
</body></html>