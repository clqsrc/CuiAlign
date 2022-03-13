
//同 golang 版本 打印错误堆栈等信息

function print_error(e)
{
	AddLog("---------------------------------------------------------------");
	AddLog("error." + e);
	AddLog("[e.stack]错误堆栈.：");
	AddLog(e.stack);
	AddLog("---------------------------------------------------------------");
	
	var error_str = "---------------------------------------------------------------" + "<br />";
	error_str += "error." + e + "<br />";
	error_str += "----------------" + "<br />";
	error_str += e.stack + "<br />";
	_alert(error_str);	
	
}//

function try_run(func)
{
	try{
		func();
	}catch(e){

		print_error(e)
		throw e;
		
	}//try	
}//

/*
try_run(function(){
	
		alert("try_run()");
}
);	
*/

