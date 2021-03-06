/**
 * Created with jing.zhao2013
 * Date: 14-3-21
 * Time: 下午4:05
 */

function Calculagraph(opt){
    if(!opt) opt={};
    this.dom = opt["dom"]?opt["dom"]:null;
    this.fn=opt["fn"]?opt["fn"]:null;
    this.time=opt["time"]?opt["time"]:null;
    this.time=Math.abs(this.time);
    this.timer=null;
    var self=this;
    var format=function(t){
        var m=60;
        var min=parseInt(t/m);
        var sec=t-min*m;
        var minute=(min<10)?"0"+min:min;
        var second=(sec<10)?"0"+sec:sec;
        return minute+":"+second;
    };
    if(self.dom){
        self.dom.innerHTML=format(self.time);
    }
    this.fun=function(){
        self.time++;
        if(self.dom){
            self.dom.innerHTML=format(self.time);
        }
        if(self.fn){
            self.fn();
        }
    };
}
Calculagraph.prototype.stop=function(){
    var self = this;
    clearInterval(self.timer);
};
Calculagraph.prototype.start=function(){
    var self = this;
    this.timer=setInterval(self.fun,1000);
};