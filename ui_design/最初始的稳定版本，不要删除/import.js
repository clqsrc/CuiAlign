
//import 的实现

//目前主要是为了检测 js 中是否有加载错误

//动态加载 js ，并且只加载一次

//import 现在是关键字，所以换一个名称
var _js_file_list_ = CreateHashMap();  //是否完成 _loadScript
var _js_file_list_ok_ = CreateHashMap();  //完成 _loadScript 后的脚本未必全部成功加载
function import_(fn, only_tag)
{
	var old = _js_file_list_.get(fn);
	
	if (old != undefined && old != null )
	 {
		 if (old.length > 0)
			return; //已存在
	}
	
	_js_file_list_.put(fn, "0");
	_js_file_list_ok_.put(fn, "0");
	
	AddLog("_loadScript() 加载 " + fn + "  ... ");
	
	if (true == only_tag) return; //如果在根 html 文件中全部加载的话，就不需要真正的动态加载，标志需要这个文件就可以了
	
	// _loadScript(fn,  function() {
	// 	//alert('动态引入 ui_design_prop.js 成功');
	// 	AddLog("_loadScript() 加载 " + fn + "  成功。");
	// 	_js_file_list_.put(fn, "1");
	//  });

	
}//

//加载成功某个文件的话，要调用这个。因为 js 中如果有语法问题，提示是很啰嗦的（完整 pc 版本很清晰，手机或者 cef 的就不一定能知道加载失败了）。
//在每个 js 文件最后调用
//这其实就是整个文件的语法检查器而已。语法有误的话，js 中的最后一句话是不会执行的
function import_ok(fn)
{
	_js_file_list_.put(fn, "1");
	_js_file_list_ok_.put(fn, "1");
}//


//检查所有的 js 文件是否全部成功了
//var last_error_file = ""; //最后一个错误文件
function all_import_ok()
{
	//_js_file_list_.values()
	//import_("aaa");
	
	var map = _js_file_list_.data; //这个只是完成
	for(var key in map)  
	{  
		value = map[key];  
		//alert(key );
		
		if ("1" != String(value))
		{
			//alert("import 未完成。fn:" + key);
			
			//AddLog("import 未完成。fn:" + key);
			
			return false;
		}//if
		
	} //for	
	
	//先判断加载是否完成，如果加载都完成了，再判断是否是成功的加载。
	//---------------------------------------------------------------
	
	var map = _js_file_list_ok_.data; //这个才是成功的文件列表
	for(var key in map)  
	{  
		value = map[key];  
		//alert(key );
		
		if ("1" != String(value))
		{
			//alert("import 未完成。fn:" + key);
			
			AddLog("import 未完成。fn:" + key);
			_alert("import 未完成。fn:" + key);
			
			return false;
		}//if
		
	} //for
	
	//都成功才能运行
	return true;
	
}//


//检查，全部完成才进行
function check_import(func)
{
	var map = _js_file_list_.data;
	for(var key in map)  
	{  
		value = map[key];  
		//alert(key );
		
		var fn = key;
		
		_loadScript(fn,  function(url) {
			AddLog("_loadScript() 加载 " + url + "  成功。");
			
			//if (fn != url) _alert("确实有问题。" + fn + " != " + url); //可以看到 fn 已经改变了，所以后面不能再用 fn
			//就是说 fn 在函数过程中是会发生改变的
			
			//_js_file_list_.put(fn, "1"); //注意，只是标记完成
			_js_file_list_.put(url, "1"); //注意，只是标记完成 //注意，不能用 fn
			//_js_file_list_ok_.put(fn, "1");  //这个才是标记成功，要在 js 文件最后手工调用 function import_ok(fn)  
			
			//是否全部成功了
			if (true == all_import_ok() )
			{
				func();
			}
			
		 });
		
		
	} //for
	
}//

//动态加载 js , 手机兼容性未知
//https://jingyan.baidu.com/article/af9f5a2d774f6c43140a45e5.html
function _loadScript(url, callback) 
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (typeof(callback) != "undefined") {
		if (script.readyState) {
			script.onreadystatechange = function() {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback(url);
				}
			};
		} else {
			script.onload = function() {
				callback(url);
			};
		}
	};
	script.src = url;
	document.body.appendChild(script);
}//
	
