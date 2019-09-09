/**
 * Created with jing.zhao2013
 * Date: 14-3-13
 * Time: 下午3:21
 */
jQuery(function($){
    //弹出框位置
    /*function getPosition(){
        var o=$("#loginForm").offset();
        var w=$("#loginDialog").width()+80;
        return {"top": o.top+10,"left": o.left-w};
    }
    //get错误弹出框
    var loginError=$("#loginDialog");
    var loginErrorDialog=loginError.dialog();
    loginErrorDialog.setPosition(getPosition());
    //窗口自适应
    function autoFit(){
        var h = Math.max($(window).height(),620);
        $("body").height(h);
        $(".footer").css("marginTop",(h-$("body").children().first().outerHeight()-$(".footer").outerHeight()));
    }
    autoFit();
    $(window).resize(function(){
        autoFit();
        loginErrorDialog.setPosition(getPosition());
    });
    //   获取焦点
    $("#loginForm").find("input").bind({
        focus:function(){
        	if(this.id.length>0){
            	$("#"+this.id).removeClass('error');
        	}
        }
    });*/
    //    点击验证码图片
   /* $("#kaptcha").click(function(){
        $(this).attr('src','Kaptcha?' + Math.floor(Math.random() * 100));
    });*/
	
    //青鸟提交表单验证
    $("#loginForm").submit(function(){
    	$("#userNameError").show();
    	$("#passwordError").show();
    	$("#verifyError").show();
    	$("#userNameError").text("");
    	$("#passwordError").text("");
    	$("#verifyError").text("");
    	
    	$("#loginForm").find("input").removeClass("error");
    	if($("#userName").val()==''){
    		 //$("#userName").addClass("error");
    		 //loginError.attr("class","login-u");
    		 //loginErrorDialog.open("账号不能为空！");
    		 //setTimeout(loginErrorDialogHide,2000);
    		$("#userNameError").text("账号不能为空！");
    		//$("#insidePassRate ~ .notice").text("内测合格率为1~100的整数");
    		 return false;
    	}else{
    		$("#userNameError").text("");
    	}
    	if($("#userPassword").val()==''||$("#userPassword").val()=='请输入密码'){
    		//$("#userPassword").addClass("error");
    		//loginError.attr("class","login-p");
    		//loginErrorDialog.open("密码不能为空！");
    		//setTimeout(loginErrorDialogHide,2000);
    		$("#passwordError").text("密码不能为空！");
   		 	return false;
    	}else{
    		var password = $("#userPassword").val();
    		$('#userPassword').val(password);
    		$("#passwordError").text("");
    	}
    	if($("#verifyCode").val()==''){
    		//$("#verifyCode").addClass("error");
    		//loginError.attr("class","login-v");
      		//loginErrorDialog.open("验证码不能为空！");
      		//setTimeout(loginErrorDialogHide,2000);
    		$("#verifyError").text("验证码不能为空！");
      		return false;
       	}else{
       		$("#verifyError").text("");
       	}
    
    	//change();
        return true;
    });
    //课工场提交表单验证
   /* $("#kgcLoginForm").submit(function(){
    	$("#kgcLoginForm").find("input").removeClass("error");
    	if($("#kgcUserName").val()==''){
    		 //$("#userName").addClass("error");
    		 //loginError.attr("class","login-u");
    		 //loginErrorDialog.open("账号不能为空！");
    		 //setTimeout(loginErrorDialogHide,2000);
    		$("#kgcUserNameError").text("账号不能为空！");
    		//$("#insidePassRate ~ .notice").text("内测合格率为1~100的整数");
    		 return false;
    	}else{
    		$("#kgcUserNameError").text("");
    	}
    	if($("#kgcUserPassword").val()==''||$("#kgcUserPassword").val()=='请输入密码'){
    		//$("#userPassword").addClass("error");
    		//loginError.attr("class","login-p");
    		//loginErrorDialog.open("密码不能为空！");
    		//setTimeout(loginErrorDialogHide,2000);
    		$("#kgcPasswordError").text("密码不能为空！");
   		 	return false;
    	}else{
    		var password = $.md5($("#kgcUserPassword").val());
    		$('#kgcUserPassword').val(password);
    		$("#kgcPasswordError").text("");
    	}
    	if($("#kgcVerifyCode").val()==''){
    		//$("#verifyCode").addClass("error");
    		//loginError.attr("class","login-v");
      		//loginErrorDialog.open("验证码不能为空！");
      		//setTimeout(loginErrorDialogHide,2000);
    		$("#kgcVerifyError").text("验证码不能为空！");
      		return false;
       	}else{
       		$("#kgcVerifyError").text("");
       	}
    	change();
        return true;
    });*/
    //alert($("#userType").val()+";;");
   if($("#userType").val() == 1 || $("#userType").val() == ""){
		//loginError.attr("class","login-u");
	   $("#passwordError").hide();
	   $("#userNameError").text($("#error").text());
	   $("#verifyError").hide();
	}else if($("#userType").val()==2){
		//loginError.attr("class","login-p");
		 $("#userNameError").hide();
		 $("#verifyError").hide();
		 $("#passwordError").text($("#error").text());
	}else if($("#userType").val()==3){
		//loginError.attr("class","login-v");
		$("#userNameError").hide();
		$("#verifyError").text($("#error").text());
		$("#passwordError").hide();
	}
   /*if($("#errorInfo").text()!=""){
    	if($("#userType").text()==1){
    		//loginError.attr("class","login-u");
    		
    	}else if($("#userType").text()==2){
    		loginError.attr("class","login-p");
    	}else if($("#userType").text()==3){
    		loginError.attr("class","login-v");
    	}
    	loginErrorDialog.open($("#errorInfo").text());
    	setTimeout(loginErrorDialogHide,2000);
    }*/
    
  /* function change(){
        var loginPwd = $('#userPassword').val();
        if(loginPwd != null && loginPwd != ''){
           var password = $.md5(loginPwd);
           $('#userPassword').val(password);
        } 
     }*/
    
   /* function loginErrorDialogHide(){
    	var loginErrorDialog=$("#loginDialog");
    	loginErrorDialog.hide();
    }*/
    
    $(".account li").on("click",function(){
    	$("#userNameError").hide();
    	$("#passwordError").hide();
 	    $("#verifyError").hide();
    	
        var a=$(this).index();
        if(a==0){
        	$("#yl005UserType").val(5);
            $(this).removeClass().addClass("green");
            $(this).siblings("li").removeClass().addClass("gray");
            $(".login-submit").css("background","#badb25");
            $("#loginForm .forget_pass").attr("href","http://www.kgc.cn/member/findpwd-mobile");
            $("#loginForm .change-color").find("a").attr("href","http://www.kgc.cn/member/reg-mobile");
            $("#loginForm .change-color").find("a").css("color","#9fc105")
        }else{
        	$("#yl005UserType").val(1);
            $(this).removeClass().addClass("blue");
            $(this).siblings("li").removeClass().addClass("gray");
            $(".login-submit").css("background","#498fed");
            $("#loginForm .forget_pass").attr("href","http://i.bdqn.cn/findpwd");
            $("#loginForm .change-color").find("a").attr("href","http://i.bdqn.cn/reg");
            $("#loginForm .change-color").find("a").css("color","#498fed")
        }

    })
    
   var loginType = $("#yl005UserType").val();
    /*alert("loginType="+loginType);*/
    if(loginType == 5){
    	 $(".account li").eq(0).removeClass().addClass("green");
    	 $(".account li").eq(0).siblings("li").removeClass().addClass("gray");
         $(".login-submit").css("background","#badb25");
         $("#loginForm .forget_pass").attr("href","http://www.kgc.cn/member/findpwd-mobile");
         $("#loginForm .change-color").find("a").attr("href","http://www.kgc.cn/member/reg-mobile");
         $("#loginForm .change-color").find("a").css("color","#9fc105")
    }else if(loginType == 1){
    	 $(".account li").eq(1).removeClass().addClass("blue");
    	 $(".account li").eq(1).siblings("li").removeClass().addClass("gray");
         $(".login-submit").css("background","#498fed");
         $("#loginForm .forget_pass").attr("href","http://i.bdqn.cn/findpwd");
         $("#loginForm .change-color").find("a").attr("href","http://i.bdqn.cn/reg");
         $("#loginForm .change-color").find("a").css("color","#498fed")
    }
    
    /*$("form").hide();
    $("form").eq(loginType).show();*/
    /*$("form1").hide();
	$("form2").show();*/
   
});
function getKaptcha(){
	 $("#kaptcha").attr('src','Kaptcha?' + Math.floor(Math.random() * 100));
}
/*function getKgcKaptcha(){
	 $("#kgckaptcha").attr('src','Kaptcha?' + Math.floor(Math.random() * 100));
}*/
/*function change(){
    var loginPwd = $('#userPassword').val();
    if(loginPwd != null && loginPwd != ''){
       var password = $.md5(loginPwd);
       alert(password);
       $('#userPassword').val(password);
    } 
 }*/