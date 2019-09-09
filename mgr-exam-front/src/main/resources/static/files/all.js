/**
 * Created by jing.zhao2013 on 14-3-27.
 */
jQuery(function($){
	//题库是否多选显示
    function nav(){
        var $d=$("#nav").children("li.on").find("ul");
        if($d.outerHeight()>30){
            $d.show();
            $("#mytop").css("marginBottom",34);
        }else{
            $d.hide();
        }
    }
    nav();
    //    高度自适应
    function autoFit(){
        $(".footer-bg").height(0);
        var wh=$(window).height();
        var dh=$("body").height();
        if(dh<wh){
            $(".footer-bg").height(wh-dh);
        }
    }
    autoFit();
    // 下拉菜单
    if($("#menu").get(0)){
        $("#menu").zjmenu({event:"click"});
    }
 // 下拉菜单
    if($("#menu1").get(0)){
        $("#menu1").zjmenu({event:"click"});
    }
    
    //回到顶部
    if($("#backTop").get(0)){
        $("#backTop").backBtn({
            isBack:true,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:16,
            bottom:90
        });
    }
    
    if($("#appDownload").get(0)){
        $("#appDownload").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:8,
            bottom:150
        });
    }
    
    if($("#qqOnline").get(0)){
        $("#qqOnline").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:8,
            bottom:350
        });
    }
    
    if($("#suggest").get(0)){
        $("#suggest").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:8,
            bottom:230
        });
    }
        
    if($("#continue").get(0)){
        $("#continue").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:8,
            bottom:310
        });
    }
    
    if($("#againExam").get(0)){
        $("#againExam").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:8,
            bottom:310
        });
    }
    
    if($("#skin").get(0)){
        $("#skin").backBtn({
            isBack:false,
            goBack:false,
            scrollTop:0,
            position:"right",
            width:1000,
            offset:-1,
            bottom:390
        });
    }

    //统一解析时间
    if($(".examTime").get(0)){
        $(".examTime").each(function(i,e){
            var t = new Date(parseInt($(e).text()));
            var hh = t.getHours();
            var mm = t.getMinutes();
            var ss = t.getSeconds();
            if(hh<10){ hh = '0'+hh;}
            if(mm<10){ mm = '0'+mm;}
            if(ss<10){ ss = '0'+ss;}
            $(e).text(t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日 "+hh+":"+mm+":"+ss);
        });
    }
 
  ///改版后的控制二级菜单显示的方法
    showSubMenu();
    
  
});

///改版后的控制二级菜单显示的方法
function showSubMenu(){
	var seq= $(".header-nav").find("li.current").attr("seq");
	var title=$(".header-nav").find("li.current").find("a").attr("title");
	if(title=="统一测试"){
		$(".evaluation_box").hide();
	}else{
		$(".evaluation_box").find(".evaluation_list").each(function(){
			var subSeq=$(this).attr("seq");
			if(seq==subSeq){
				$(this).show();
			}
		})
	}
	
	
}
