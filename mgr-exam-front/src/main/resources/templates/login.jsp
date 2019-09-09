<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0032)http://tiku.kgc.cn/testing/login -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>用户登录-课工场题库/青鸟题库</title>
		
		<link rel="stylesheet" type="text/css" href="./files_login/login.css">
		<link rel="icon" type="image/x-icon" href="http://tiku.kgc.cn/testing/favicon.ico">
		<script src="./files_login/hm.js"></script><script type="text/javascript" src="./files_login/jquery-1.8.3.min.js"></script>
		<script type="text/javascript" src="./files_login/dialog.js"></script> 
		<script type="text/javascript" src="./files_login/jquery.md5.js"></script>
		<script type="text/javascript" src="./files_login/placeholder.js"></script>
		<script type="text/javascript" src="./files_login/login.js"></script>
		<script type="text/javascript" src="./files_login/jquery-3.2.1.min.js"></script>
		<script>
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?b79c0eb9e5f2f0a322ac48a6164b793b";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
function getSecret()
{
	
}
</script>
	</head>
<body>
<header>
    <a href="http://tiku.kgc.cn/testing/login#"><img src="./files_login/logo.gif" alt="logo"></a>
</header>
<section>
    <div class="text-login">
        <h1>个性化和智能化的技能评测系统</h1>
        <div class="login">
            <ul class="account">
                <li class="green">课工场账号登录</li>
                <li class="gray">青鸟账号登录</li>
            </ul>
            <form id="loginForm" class="form1" action="doLogin" method="post" autocomplete="on">
            <input id="yl005UserType" name="yl005UserType" value="5" type="hidden">
            <input id="userType" name="userType" type="hidden" value="">
            <div id="errorMessage" style="color:red; padding-left:40px;padding-bottom:10px;">${error}</div>
          
                <ul>
                    <li>
                        <div><nobr><span><img src="./files_login/user1.gif" alt=""></span>
                        <!-- <input type="text" placeholder="请输入账号"/>  -->
                        <input id="userName" name="userCode" placeholder="请输入账号" type="text" value=""></nobr>
                        </div>
                        <div id="userNameError" class="user errorMessage" style="display:none;"></div>
                    </li>
                    <li style="overflow: visible;height: auto;">
                        <div><nobr><span><img src="./files_login/lock2.gif" alt=""></span>
                        <!-- <input type="text" placeholder="请输入密码"/> -->
                        <input id="userPassword" name="password" class="login-input" placeholder="请输入密码" type="password" value=""></nobr>
                        </div>
                        <div><span id="passwordError" class="pwd errorMessage"  style="display:none;"></span></div>
                        <div style="margin-top: 10px;">
                            <span class="forget" style="font-size: 13px;">
                                <input id="remember" name="remember" value="" type="checkbox" onclick="rememberClick()" style="display: inline-block;width: 15px;height: 15px;">
                                <span class="left">记住密码</span>
                                <a href="http://www.kgc.cn/member/findpwd-mobile" target="_blank" title="忘记密码" class="blue forget_pass">忘记密码</a>
                            </span>
                        </div>


                    </li>

                    <li><!-- <nobr><input type="text" id="verifyCode" name="verifyCode" placeholder="  请输入验证码">
                    <span> 
                        <img style="width: 110px;height: 40px;" src="./files_login/Kaptcha" id="kaptcha" alt="验证码" title="点击刷新验证码"> 
                    </span>
                    <span><a href="javascript:getKaptcha();">换一张</a></span>
                    </nobr> 
                        <div id="verifyError" class="verify errorMessage" style="display: none;"></div>-->
                    </li>
                    <li><input name="submit" type="submit" value="登录" class="login-submit" id="login" style="background: rgb(186, 219, 37);"></li>
                    <li><p class="change-color">还没有账号？<a href="http://www.kgc.cn/member/reg-mobile" style="color: rgb(159, 193, 5);">立即注册</a></p></li>
                    </ul>
            </form></div>
    </div>
</section>
<footer>
    <p>©2019 北京课工场教育科技有限公司 版权所有 京ICP备15057271号 京公网安备11010802017390号</p>
</footer>

<script type="text/javascript">
    $(".login input[type!='submit']").focus(function(){
	   $(this).removeClass().addClass("focus");
	})
	$(".login input[type!='submit']").blur(function(){
	   $(this).removeClass().addClass("blurs");
	})
	function loginQq(){
    	alert("暂时不支持微信、微博、QQ方式登录");
    }
    function  rememberClick() {
        if($('#remember').is(':checked')) {
            // do something
            $('#remember').val(1);
        }else{
            $('#remember').val(0);
        }
    }
</script>


</body></html>