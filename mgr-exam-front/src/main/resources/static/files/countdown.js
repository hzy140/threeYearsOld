/**
 * Created with jing.zhao2013
 * Date: 14-3-13
 * Time: 下午4:50
 */
function CountDown(opt){
    if(!opt) opt={};
    this.dom = opt["dom"]?opt["dom"]:null;
    this.totalSecond=opt["totalSecond"]?opt["totalSecond"]:10000;
	this.fn=opt["fn"]?opt["fn"]:null;
    this.auto=opt["auto"]?opt["auto"]:false;
    this.zeroFn=opt["zeroFn"]?opt["zeroFn"]:null;
    this.lowerFn=opt["lowerFn"]?opt["lowerFn"]:null;
    this.timer=null;
    this.started=false;
    if(!this.dom) {
        alert("请设置正确的参数");
        return false;
    }
    var self=this;
    var format=function(t){
        var m=60;
        var min=parseInt(t/m);
        var sec=t-min*m;
        var minute=(min<10)?"0"+min:min;
        var second=(sec<10)?"0"+sec:sec;
        return minute+":"+second;
    };
    if(this.totalSecond<0){
    	clearInterval(self.timer);
    	if(self.lowerFn !=null)
       {
    		 self.lowerFn();
    	     return;
       }
    }
    self.dom.innerHTML=format(self.totalSecond);
    this.fun=function(){
        self.totalSecond--;
        self.dom.innerHTML=format(self.totalSecond);
        
        var now = new Date();
        
        if(self.fn){
            self.fn();
        }
        if(self.totalSecond<=0){
            clearInterval(self.timer);
            if(self.zeroFn){
                self.zeroFn();
            }
        }
    };
    if(self.auto){
    	if(self.started) return false;
        this.timer=setInterval(self.fun,1000);
        self.started = true;
    }
}
CountDown.prototype.stop=function(){
    var self = this;
    self.started = false;
    clearInterval(self.timer);
};
CountDown.prototype.start=function(){
    var self = this;
    if(self.started) return false;
    self.started = true;
    if(self.totalSecond<=0){
        return false;
    }
    this.timer=setInterval(self.fun,1000);
};