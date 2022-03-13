
//简单的封装一下 hashmap

//js 的对象模型比较绕，所以还是简单的在原始类上扩展好了

    /** 
    *作者 ：Fantasy 
    *Email: fantasycs@163.com 
    *QQ   : 8635335 
    *Blog : http://www.blogjava.net/fantasy 
    *版本 ：V1.1  
    */  
    function HashMap()  
    {  
        /** Map 大小 **/  
        var size = 0;  
        /** 对象 **/  
        var entry = new Object();  
          
        /** 存 **/  
        this.put = function (key , value)  
        {  
            if(!this.containsKey(key))  
            {  
                size ++ ;  
            }  
            entry[key] = value;  
        }  
          
        /** 取 **/  
        this.get = function (key)  
        {  
            return this.containsKey(key) ? entry[key] : null;  
        }  
          
        /** 删除 **/  
        this.remove = function ( key )  
        {  
            if( this.containsKey(key) && ( delete entry[key] ) )  
            {  
                size --;  
            }  
        }  
          
        /** 是否包含 Key **/  
        this.containsKey = function ( key )  
        {  
            return (key in entry);  
        }  
          
        /** 是否包含 Value **/  
        this.containsValue = function ( value )  
        {  
            for(var prop in entry)  
            {  
                if(entry[prop] == value)  
                {  
                    return true;  
                }  
            }  
            return false;  
        }  
          
        /** 所有 Value **/  
        this.values = function ()  
        {  
            var values = new Array();  
            for(var prop in entry)  
            {  
                values.push(entry[prop]);  
            }  
            return values;  
        }  
          
        /** 所有 Key **/  
        this.keys = function ()  
        {  
            var keys = new Array();  
            for(var prop in entry)  
            {  
                keys.push(prop);  
            }  
            return keys;  
        }  
          
        /** Map Size **/  
        this.size = function ()  
        {  
            return size;  
        }  
          
        /* 清空 */  
        this.clear = function ()  
        {  
            size = 0;  
            entry = new Object();  
        }  
    }  
      
    var map = new HashMap();  
      
    /* 
    map.put("A","1"); 
    map.put("B","2"); 
    map.put("A","5"); 
    map.put("C","3"); 
    map.put("A","4"); 
    */  
      
    /* 
    alert(map.containsKey("XX")); 
    alert(map.size()); 
    alert(map.get("A")); 
    alert(map.get("XX")); 
    map.remove("A"); 
    alert(map.size()); 
    alert(map.get("A")); 
    */  
      
    /** 同时也可以把对象作为 Key **/  
    /* 
    var arrayKey = new Array("1","2","3","4"); 
    var arrayValue = new Array("A","B","C","D"); 
    map.put(arrayKey,arrayValue); 
    var value = map.get(arrayKey); 
    for(var i = 0 ; i < value.length ; i++) 
    { 
        //alert(value[i]); 
    } 
    */  
    /** 把对象做为Key时 ，自动调用了该对象的 toString() 方法 其实最终还是以String对象为Key**/  
      
    /** 如果是自定义对象 那自己得重写 toString() 方法 否则 . 就是下面的结果 **/  
      
    function MyObject(name)  
    {  
        this.name = name;  
    }  
      
    /** 
    function MyObject(name) 
    { 
        this.name = name; 
         
        this.toString = function () 
        { 
            return this.name; 
        } 
    } 
    **/  
    var object1 = new MyObject("小张");  
    var object2 = new MyObject("小名");  
      
    map.put(object1,"小张");  
    map.put(object2,"小名");  
    alert(map.get(object1));  
    alert(map.get(object2));  
    map.remove("xxxxx");  
    alert(map.size());  
      
    /** 运行结果 小名 小名 size = 1 **/  
      
    /** 如果改成复写toString()方法的对象 , 效果就完全不一样了 **/  


//新建一个
function CreateHashMap()
{
	if (null == parent_div || undefined == parent_div) 
		parent_div = document.body; //$(document.body).append(boarddiv); 
	
	var childdiv = $('<div>&nbsp</div>');        //创建一个子div
	//childdiv.attr('id','child');            //给子div设置id
	//childdiv.addclass('childdiv');    //添加css样式
	//childdiv.appendto(parent_div);        //将子div添加到父div中
	//parentdiv.appendto('body');            //将父div添加到body中
	
	$(parent_div).append(childdiv); 
	
	var dom = childdiv.get(0);  //DOM对象 
	
	MakeStdDiv(dom);
	
	return dom;
}//

//标准化一个 div
function MakeStdDiv(div)
{
	//如果是语法错误，这里的 try 是无法捕捉的。除非是在另外一个文件中调用才可能发现错误，
	//大概是因为语法错误导致整个文件 js 全部失效了。
	//另外，据说在另外一个函数中 try 比较好
	try{
		return _MakeStdDiv(div); 
	}catch(e){
		AddLog("error at MakeStdDiv()." + e);
	}
	
}//

//会有异常
function _MakeStdDiv(div)
{
	//try{
		

	AddLog("MakeStdDiv()");
	$(div).css({display: "inline-block", position: "absolute"});
	
	//$(div).css({"background-color": "#ff0000"});
	
	// function Person(){
	
	//   this.name="xx";
	
	//   this.age=20;
	
	// }
	// var p1=new Person();
	// p1 = div;
	
	// p1.abc=function show1(){
	
	//   window.alert("hello"+this.name);
	
	// }
	
	// p1.abc();
	
	div.backgroundColor = function (color) {
		$(this).css({"background-color": color});
	}//
	
	div.width = function (v) {
		$(this).css({width: v});
	}//
	
	div.height = function (v) {
		$(this).css({"height": v});
	}//
	
	//显示为占一整行
	div.SetLineDiv = function ()
	{
		//$(div).css({display: "block", position: ""});
		SetLineDiv(this)
		
		AddLog("div.SetLineDiv() ok");
	}//
	
	//圆角
	div.border_radius = function (v) {
		$(this).css({"border-radius":v});
	}//
	
	//边框. 参考 ios 版本 
	//void UIView_SetBorderWith(UIView * view, BOOL top, BOOL left, BOOL bottom, BOOL right, UIColor * borderColor, CGFloat borderWidth)
	div.SetBorderWith = function(top, left, bottom, right, borderColor, borderWidth)
	{
		    var color = borderColor;
		    var width = borderWidth;
			
			//border:  #ccc solid  1px;
			var v = color + " solid " + width;
		    
		    if (top)
		    {
		        $(this).css({"border-top":v});
		    }
		    
		    if (left)
		    {
		        $(this).css({"border-left":v});
		    }
		    
		    if (bottom)
		    {
		        $(this).css({"border-bottom":v});
		    }
		    
		    if (right)
		    {
		        $(this).css({"border-right":v});
		    }

	}//
	
	//自由位置 . 注意只有自由布局下才有效，不过 ios 下默认就是这样的
	//ios 下不需要 parent_relative 参数
	//这个是相对父控件的定位
	div.SetPos = function (x, y, parent_relative) {
		//if (parent_relative) 
		//	$(this.parent).css({"position": "relative"});  //h5 里是要设置这个的,要不会相对其他 div 偏移，而不是父节点
			
		$(this).css({"position": "relative"}); //其实还是设置相对位置，因为 ios 它们是没有绝对位置的概念的
		$(this).css({"left":x, "top":y});
	}//
	
	//自由位置 . 注意只有自由布局下才有效，不过 ios 下默认就是这样的
	//ios 下不需要 parent_relative 参数
	//这个是绝对定位，感觉尽量不要用。不过 android 的相对布局则是有可能用到的
	div.SetPos_absolute = function (x, y, parent_relative) {
		if (parent_relative) 
			$(this.GetParent()).css({"position": "relative"});  //h5 里是要设置这个的,要不会相对其他 div 偏移，而不是父节点
			
		//$(this).css({"position": "relative"}); //其实还是设置相对位置，因为 ios 它们是没有绝对位置的概念的
		$(this).css({"left":x, "top":y});
	}//	
	
	//取父节点
	div.GetParent = function () {

		//AddLog(this.parent);
		//AddLog(this.parentNode); //这个才是对的
		return this.parentNode;
	}//
	
	//居中的标题. 这个有很多方法，如果只是生成布局文件的话还是用 css 为好，不过计算绝对位置也是可以的
	//这个是比较通用的绝对位置算法
	div.SetPos_Center = function () {
		//if (parent_relative) 
		//	$(this.parent).css({"position": "relative"});  //h5 里是要设置这个的,要不会相对其他 div 偏移，而不是父节点
			
		//var p_width = $(this.parent).width();  //这个其实是不太正确的	
		//var p_height = $(this.parent).height();  //这个其实是不太正确的	
		var p_width = $(this.parentNode).width();  //这个其实是不太正确的	
		var p_height = $(this.parentNode).height();  //这个其实是不太正确的	
		
		var w = this.Width();
		var h = this.Height();
		
		AddLog(w); AddLog(h);
		AddLog(p_width + " - " + this.parentNode.clientWidth + " - " + this.parentNode.offsetWidth);
		// AddLog(p_height);
		// AddLog(this.parent);
		// AddLog(this.parentNode); //这个才是对的
		
		var x = p_width / 2.0 - w/2.0;
		var y = p_height / 2.0 - h/2.0;
			
		//$(this).css({"position": "relative"}); //其实还是设置相对位置，因为 ios 它们是没有绝对位置的概念的
		$(this).css({"left":x, "top":y});
	}//		
	
	//宽高有两种概念，包括全部的、只含客户区的
	div.ClientWidth =  function () {
		//return div.offsetWidth;
		return div.clientWidth;
	}//
	
	//这个是全部的宽度
	div.Width =  function () {
		return div.offsetWidth;
		//return div.clientWidth;
	}//
	
	div.ClientHeight =  function () {
		//return div.offsetWidth;
		return div.clientHeight;
	}//
	
	div.Height =  function () {
		return div.offsetHeight;
		//return div.clientWidth;
	}//
	
	
	
	
	
	//div.SetBackgroundColor("#ff0000");
	
	AddLog("MakeStdDiv() ok");
	
	return div;
	// }catch(e){
		
	// 	AddLog("error.")
	// }	
}//

//显示为占一整行
function SetLineDiv(div)
{
	$(div).css({display: "block", position: ""});
	
}//