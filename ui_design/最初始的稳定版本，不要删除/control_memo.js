
//memo 控件

AddLog("load control_memo.js");

//新建一个标准化 div
function CreateMemoControl(parent_div)
{
	if (null == parent_div || undefined == parent_div) 
		parent_div = document.body; //$(document.body).append(boarddiv); 
	
	//var childdiv = $("<input type='text' id=" + o.id + "_edit  value='' />");        //创建一个子div
	var childdiv = $("<textarea id=" + parent_div.id + "_edit  value='' />");        //创建一个子div

	
	$(parent_div).append(childdiv); 
	
	var dom = childdiv.get(0);  //DOM对象 
	
	MakeStdDiv(dom);
	
	return dom;
}//



AddLog("load control_memo.js ok");
import_ok("control_memo.js");
