
//参考 hashmap

//统一的数组接口

function CreateList()
{  
	var list = new Array();  
	// for(var key in map)  
	// {  
	// 	values.push(map[key]);  
	// }  
	
	list.Add = function (v)
	{
		this.push(v);  
	}//
	
	//要用 prototype 属性加函数的话，要写上正确的类名，而不是用对象实例
	//Array.prototype.Count = function ()
	list.Count = function ()
	{
		return this.length;  
	}//
	
	return list;  
}//


