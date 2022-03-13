

//很多 app 是要配色的，比如夜间模式。分成不同的布局文件当然可以，不过比较好的文案是配色

//从站点 https://www.flatuicolorpicker.com/   可以看出其实 5 种颜色就足够 了。但为了适应不同的需求深度，我们分为 0-9 一共 10 级，
//对于普通只需要三级的我们的有效值就是 0，5，9
//对于 5 级的，我们的有效值就是 0，3，5，7，9
//目的是让 5，9 在多个级别中生效，减少更换颜色级别时的代码修改量

//字体颜色则不太一样，一般有一个主字体色，然后又有白色（不一定是纯白）、黑色（不一定是纯白），然后还会有一种与背景搭配的反转色
//这个反转色一般是上述黑白中的一种，但是也不一定，所以还是单独列出为好。

//变量都是网页 hex ，如果是 6 位就说明是 rgb ，如果是 8 位那就是 argb 格式。似乎不是所有的浏览器都支持 argb 格式。

//程序主色
var main_color = "#f71138";

//程序字体主色
var main_font_color = "#e8e8e8";

//程序中的白色（不一定是纯白）
var font_color_white = "#e8e8e8";
//程序中的黑色（不一定是纯黑）
var font_color_black = "#000000";

//程序主背景色 //一般等同于程序主色
var main_bk_color = "#000000"; //"#f71138";

//程序主色第 1 级（最深的） //一般等同于程序主色，不过很多时候比主色深
var main_color_0 = "#811D22";  //"#f71138";  //3,5,10 级别时有效果
var main_color_1 = "#A7001C";
var main_color_2 = "#B50D29";
var main_color_3 = "#DD002C";
var main_color_4 = "#E32226";
var main_color_5 = "#F71138";  //3,5,10 级别时有效果 //可以看到一般等于程序主背景色
var main_color_6 = "#AE003C";
var main_color_7 = "#f71138";
var main_color_8 = "#f71138";
var main_color_9 = "#f71138";  //3,5,10 级别时有效果

//背景色不一定是主颜色系的，目前的流行趋势下其实有可能是黑色系列或者白色系（灰色）。//所以还是应当区分开来ß
//程序主背景色第 1 级（最深的） //一般等同于程序主色，不过很多时候比主色深
var main_bk_color_0 = "#000000";  //"#f71138"; //一般不是黑就是白，要不就是主程序色  //3,5,10 级别时有效果
var main_bk_color_1 = "#1e1e1e";
var main_bk_color_2 = "#2c2c2c";
var main_bk_color_3 = "#404040";
var main_bk_color_4 = "#c1c1c1";
var main_bk_color_5 = "#cccccc";  //3,5,10 级别时有效果 //可以看到一般等于程序主背景色
var main_bk_color_6 = "#cccccc";
var main_bk_color_7 = "#cccccc";
var main_bk_color_8 = "#cccccc";
var main_bk_color_9 = "#cccccc";  //3,5,10 级别时有效果

//程序主文字色 //一般与主背景色相反
//var main_text_color = "#ffffff"; //"#f71138";


//虚拟颜色转换成配置中的实际颜色
function get_config_color(vcolor)
{
	if (vcolor =="main_color") return main_color;
	
	//程序字体主色
	if (vcolor =="main_font_color") return  main_font_color;
	
	//程序中的白色（不一定是纯白）
	if (vcolor =="font_color_white") return  font_color_white;
	//程序中的黑色（不一定是纯黑）
	if (vcolor =="font_color_black") return  font_color_black;
	
	//程序主背景色 //一般等同于程序主色
	if (vcolor =="main_bk_color") return  main_bk_color;
	
	//程序主文字色 //一般与主背景色相反
	//if (vcolor =="main_text_color") return  var main_text_color;
	
	//程序主色第 1 级（最深的） //一般等同于程序主色，不过很多时候比主色深
	if (vcolor =="main_color_0") return  main_bk_color_0;  //"#f71138";  //3,5,10 级别时有效果
	if (vcolor =="main_color_1") return  main_bk_color_1;
	if (vcolor =="main_color_2") return  main_bk_color_2;
	if (vcolor =="main_color_3") return  main_bk_color_3;
	if (vcolor =="main_color_4") return  main_bk_color_4;
	if (vcolor =="main_color_5") return  main_bk_color_5;  //3,5,10 级别时有效果 //可以看到一般等于程序主背景色
	if (vcolor =="main_color_6") return  main_bk_color_6;
	if (vcolor =="main_color_7") return  main_bk_color_7;
	if (vcolor =="main_color_8") return  main_bk_color_8;
	if (vcolor =="main_color_9") return  main_bk_color_9;  //3,5,10 级别时有效果
	
	//程序主背景色
	if (vcolor =="main_bk_color_0") return  main_bk_color_0;  
	if (vcolor =="main_bk_color_1") return  main_bk_color_1;
	if (vcolor =="main_bk_color_2") return  main_bk_color_2;
	if (vcolor =="main_bk_color_3") return  main_bk_color_3;
	if (vcolor =="main_bk_color_4") return  main_bk_color_4;
	if (vcolor =="main_bk_color_5") return  main_bk_color_5;  
	if (vcolor =="main_bk_color_6") return  main_bk_color_6;
	if (vcolor =="main_bk_color_7") return  main_bk_color_7;
	if (vcolor =="main_bk_color_8") return  main_bk_color_8;
	if (vcolor =="main_bk_color_9") return  main_bk_color_9;  
	
	return vcolor;  //什么都不是则返回原值
}//


AddLog("load config_color.js ok");
import_ok("config_color.js");
