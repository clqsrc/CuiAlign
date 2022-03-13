
//标准 alert 不一定能用，所以严重的消息要自己弹出

AddLog("load _alert.js");

function _alert(s)
{
	var parent_div = document.body; //$(document.body).append(boarddiv);
	
	var childdiv = $("<div style='border: #cccccc solid 1px;  display: inline-block;  position: absolute;  '>" + s + "</div>");        //创建一个子div
	//childdiv.attr('id','child');            //给子div设置id
	//childdiv.addclass('childdiv');    //添加css样式
	//childdiv.appendto(parent_div);        //将子div添加到父div中
	//parentdiv.appendto('body');            //将父div添加到body中
	
	$(childdiv).css("min-width", "100px"); 
	$(childdiv).css("width", "80%"); 
	$(childdiv).css("min-height", "100px"); 
	$(childdiv).css("z-index", "20000"); 
	$(childdiv).css({"background-color": "#eeeeee"});
	
	$(parent_div).append(childdiv); 
	
	$(childdiv).click(function(){
		$(childdiv).hide();
	});
	
	var dom = childdiv.get(0);  //DOM对象 
}//

AddLog("load _alert.js ok");
import_ok("_alert.js");