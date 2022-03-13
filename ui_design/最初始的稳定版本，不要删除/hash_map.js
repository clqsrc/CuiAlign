
//简单的封装一下 hashmap

//js 的对象模型比较绕，所以还是简单的在原始类上扩展好了

//参考 hash_map_ref.js

//新建一个
function CreateHashMap()
{
	//var list; //不能直接写成这个
	//var list = new Object(); //不好，会在遍历时带有函数名。其实直接当做 json 用就行了
	//var list = {};
	
	var list = new Object(); 
	list.data = {}; //其实是个内置的 json ，其实也是个内置的类
	
	list.put = function (key, value)
	{
		this.data[key] = value;
	}//
	
	list.get = function (key)
	{
		var value = this.data[key];
		return value;
	}//
	
	//所有 value
	list.values_ = function ()  
	{  
		var values = new Array();  
		var entry = this.data;
		for(var prop in entry)  
		{  
			values.push(entry[prop]);  
		}  
		return values;  
	}//
	
	//所有 value
	list.values = function ()  
	{  
		var values = new Array();  
		var map = this.data;
		for(var key in map)  
		{  
			values.push(map[key]);  
		}  
		return values;  
	}//
	
	//测试类功能
	list.test = function()
	//list.prototype.test = function() //据说不加 prototype 的话就会生成多个函数的实例//不过这个类模型下用不了这个
	{
		try{
			var t = CreateHashMap(); //会递归死循环吗
			
			t.put("count", 100);
			AddLog(t.get("count"));
			
		}catch(e){
			AddLog("error at list.test()." + e);
		}
		
	}//
	
	return list;
}//

//---------------------------------------------------------------
/*
javascript 原生的 map 特性：
    var myMap = {};  
    myMap['key1'] = {name:'amhuman',blog:'http://am-human.iteye.com/'};  
    alert(myMap['key1']); 
*/	
