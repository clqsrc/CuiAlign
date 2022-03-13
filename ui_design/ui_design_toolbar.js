
//ui 设计器的工具栏


function ui_design_toolbar_create(parent)
{
	var line = CreateStdDiv(parent);
	line.isDesign = true;  //表明自己是设计时的控件
	//line.Height("50px");
	line.Height("100px");
	line.backgroundColor("#eeeeee");
	line.Width("80%");
	//暂时 //显示在最上层
	line.ShowAtTop();
	line.border_radius("5px");
	line.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	
	//创建 div 的按钮, 点击后进入创建状态
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnCreateView = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("div");
	o.SetPos("4px", "4px");
	
	$(o).click(function(){ 
		//alert("段落被点击了。"); 
		
		//动态创建一个 div 到指定控件下
		var p = ui_last_click_div;
		var o = CreateStdDiv(p);
		o.Width("100px");
		//o.innerHTML = "new";
		o.SetCaption("new");
		
		
	});  
	
	//显示 div 属性窗的按钮
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnShowViewProp = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("属性");
	o.SetPos("47px", "4px");
	
	$(o).click(function(){ 
		$(ui_design_prop_form).toggle();
		ui_design_prop_form.GetControlAllAttrib(); //取控件的所有属性
	});
	
	//删除的按钮
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnShowViewProp = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("delete");
	o.SetPos("90px", "4px");
	$(o).click(function(){ 
		//alert("段落被点击了。"); 
		
		//动态创建一个 div 到指定控件下
		var p = ui_last_click_div;
		p.parentNode.removeChild(p);  //似乎还在内存中，怎样回收内存 ?
		
		ui_last_click_div = null;
		
	});  	
	
	//选择父控件的按钮
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnShowViewProp = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("100px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("选择父控件");
	o.SetPos("140px", "4px");
	$(o).click(function(){ 
		//alert("段落被点击了。"); 
		
		//动态创建一个 div 到指定控件下
		var p = ui_last_click_div;
		ui_last_click_div = p.parentNode; 
		p = ui_last_click_div;
		
		//var old_color = p.ui_props.get("background-color");
		//alert(old_color);
		
		//p.ui_props.put("background-color", $(p).css("background-color")); //存一下背景色
		var old_color = $(ui_last_click_div).css("background-color");
		$(ui_last_click_div).css({"background-color": "#ff0000"});
		
		
		//5秒后执行testFunction()函数，只执行一次。
		setTimeout(function(){ 
				//alert(old_color); 
				//$(ui_last_click_div).css({"background-color": "#ffffff"});
				$(ui_last_click_div).css({"background-color": old_color});
			}, 
			500);  //5秒后执行testFunction()函数，只执行一次。
		
	});  		
	
	//显示当前控件
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnShowViewProp = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("60px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("高亮当前控件");
	o.SetPos("286px", "4px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 

		var p = ui_last_click_div;
		
		//p.ui_props.put("background-color", $(p).css("background-color")); //存一下背景色
		var old_color = $(ui_last_click_div).css("background-color");
		$(ui_last_click_div).css({"background-color": "#ff0000"});
		
		
		//5秒后执行testFunction()函数，只执行一次。
		setTimeout(function(){ 
				//alert(old_color); 
				//$(ui_last_click_div).css({"background-color": "#ffffff"});
				$(ui_last_click_div).css({"background-color": old_color});
			}, 
			500);  //5秒后执行testFunction()函数，只执行一次。
		
	});  
	

	
	//显示 ui json 源码
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnShowViewProp = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("源码");
	o.SetPos("243px", "4px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
		$(ui_design_src_form).toggle();
		
		//var src = JSON.stringify(dom2Json(ui_last_click_div));
		//var src = JSON.stringify((ui_last_click_div));
//ok//		var src = UIControlToJson(ui_last_click_div);
		
		var src = UIControlToJson(ui_design_root_form); //还是显示整体的源码吧
		
		//src = "aaa2";
		//alert(src);
		ui_design_src_form.SetText(src);
		
		//var t1 = JsonToUIControl(null, src); //test 生成控件看看
		//t1.FlashWindow();
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});  	
	
	//2021.8 
	//显示 ui json 源码 //当前控件
		var o = CreateStdDiv(line);
		o.isDesign = true;  //表明自己是设计时的控件
		var btnShowViewProp = o;
		o.Height("40px");
		//o.backgroundColor("#eeeeee");
		o.Width("60px");  //长度不够的话，文字会不居中
		o.border_radius("5px");
		o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
		o.SetCaption("当前控件源码");
		o.SetPos("243px", "54px");
		$(o).click(function(){ 
			//alert("段落被点击了。" + ui_last_click_div); 
			
			try{//这个过程太复杂，所以 try 一下看问题所在
			$(ui_design_src_form).toggle();
			
			//var src = JSON.stringify(dom2Json(ui_last_click_div));
			//var src = JSON.stringify((ui_last_click_div));
			var src = UIControlToJson(ui_last_click_div);
			
			//var src = UIControlToJson(ui_design_root_form); //还是显示整体的源码吧
			
			//src = "aaa2";
			//alert(src);
			ui_design_src_form.SetText(src);
			
			//var t1 = JsonToUIControl(null, src); //test 生成控件看看
			//t1.FlashWindow();
			
			}catch(e){
				print_error(e)
				throw e;
			}//try
		
		});  	
	
	
	//复制控件及子控件，因为界面有时候很复杂//复制的内容与 json 转换的应该相同,并不是全部属性都复制
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnCopyView = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("复制");
	o.SetPos("350px", "4px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
		//$(ui_design_src_form).toggle();
		
		var p = ui_last_click_div;
		p = p.parentNode;  //取得父控件
		//$(ui_last_click_div).parentNode
		
		//var src = JSON.stringify(dom2Json(ui_last_click_div));
		//var src = JSON.stringify((ui_last_click_div));
		//ok//var src = UIControlToJson(ui_last_click_div);

		//先根据控件取得其 json 结构
		var json_obj = _UIControlToJson(ui_last_click_div);  //_UIControlToJson 得到的是对象 UIControlToJson 得到的是字符串
		
		//给子控件分配新 id, 并且位置要偏离一下
		//json_obj.id = "123";
		//div.SetId(GetUI_NewID()); //给一个默认 id
		//json_obj.id = GetUI_NewID(); //给一个默认 新id
		_JsonSetNewIDforCopy(json_obj);
		
		//json_obj.left += 5;
		//json_obj.top += 5;
		
		//2021.8 现在都是字符串，要转换一下
		json_obj.left = StrToInt(json_obj.left) + 5;
		json_obj.top = StrToInt(json_obj.top) + 5;
		
		//再根据 json 生成控件，放到当前控件的父控件中(目的是同级)
		_JsonToUIControl(p, json_obj) 

		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});	
	
	var g_cut_json_obj = {}; //剪切后的产物
	
	//剪切 //同复制差不多
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnCutView = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("剪切");
	o.SetPos("350px", "54px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
		//$(ui_design_src_form).toggle();
		
		var p = ui_last_click_div;
		//p = p.parentNode;  //取得父控件
	
		//先根据控件取得其 json 结构
		var json_obj = _UIControlToJson(ui_last_click_div);  //_UIControlToJson 得到的是对象 UIControlToJson 得到的是字符串
		
		//给子控件分配新 id, 并且位置要偏离一下
		//_JsonSetNewIDforCopy(json_obj);
		
		//json_obj.left += 5;
		//json_obj.top += 5;
		
		//再根据 json 生成控件，放到当前控件的父控件中(目的是同级)
		////_JsonToUIControl(p, json_obj) 
	
		g_cut_json_obj = json_obj;
		
		//--------
		//最后将自己删除
		p.parentNode.removeChild(p);  //似乎还在内存中，怎样回收内存 ?
		
		ui_last_click_div = null;
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});	
	
	//---------------------------------------------------------------
	//剪切 //同复制差不多
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnCutView = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("粘帖");
	o.SetPos("400px", "54px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
		//$(ui_design_src_form).toggle();
		
		var p = ui_last_click_div;
		//p = p.parentNode;  //取得父控件
	
		//先根据控件取得其 json 结构
		//var json_obj = _UIControlToJson(ui_last_click_div);  //_UIControlToJson 得到的是对象 UIControlToJson 得到的是字符串
		
		var json_obj = g_cut_json_obj;
		
		//给子控件分配新 id, 并且位置要偏离一下
		//_JsonSetNewIDforCopy(json_obj);
		
		//json_obj.left += 5;
		//json_obj.top += 5;
		
		//再根据 json 生成控件，放到当前控件的父控件中(目的是同级)
		_JsonToUIControl(p, json_obj) 
	
		//g_cut_json_obj = json_obj;
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});		
	
	//---------------------------------------------------------------
	//同级上移，主要用于调整大范围的移动
	
	//---- 要移动的数值
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	o.SetId("move_value");
	
	//var btnHeightPosValue = o;
	o.Height("40px");
	//o.backgroundColor("#dddddd");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	//o.SetCaption("<input type='text' id=" + o.id + "_edit  value='" + "" + "' />");
	o.SetPos("500px", "54px");
	
	var edit = CreateEditControl(o);
	edit.isDesign = true;
	edit.SetId( o.id + "_edit");
	
	$("#" + o.id + "_edit").css({"width": "80%"}); //限制下宽度，因为手机下可能超出父节点宽度
	$("#" + o.id + "_edit").css({"background-color": "#00ff0000"});
	
	//SetValueEditCss(o.id + "_edit");
	$("#" + o.id + "_edit").css({"width": "40px"});
	edit.SetPos_Center();
	
	var txtMoveEdit = edit;
	$("#" + txtMoveEdit.id).val("10");
	
	//----
	
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnCutView = o;
	o.Height("40px");
	//o.backgroundColor("#eeeeee");
	o.Width("40px");  //长度不够的话，文字会不居中
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("同级上移");
	o.SetPos("450px", "54px");
	$(o).click(function(){ 
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在

		var value = $("#" + txtMoveEdit.id).val();
		//alert(value);
		
		var p = ui_last_click_div;
		p = p.parentNode;  //取得父控件

		//再根据 json 生成控件，放到当前控件的父控件中(目的是同级)
		//_JsonToUIControl(p, json_obj) ;
		////p.backgroundColor("#ff0000");
		
		//$(p).css(String(css_key), StrToInt(value));
		////var old_top = p.Top();
		////$(p).css("top", old_top + StrToInt(value));
		
		//所有同级的都要移动
		var con = p;
		for(var i=0; i<con.childNodes.length; i++)
		{
			var child = con.childNodes[i];
			//var child_prop = _UIControlToJson(child);
			
			//if (isNull(child_prop)) continue;
			//if (undefined == child.Top || null == child.top) continue;  //临时用的检测，如果没有 top 函数则有可能是 nbsp 这样的空白
			if (undefined == child.ui_props || null == child.ui_props) continue;  //这个是比较准确的检测，有这个属性才是我们的控件
			
			var old_top = child.Top();
			$(child).css("top", old_top + StrToInt(value));
			
			//obj.children.push(child_prop);
		}//for
		
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});		
	
	//---------------------------------------------------------------
	//提前
	
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	o.SetId("btn_bring_to_top");
	
	//var btnHeightPosValue = o;
	o.Height("40px");
	//o.backgroundColor("#dddddd");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("提前");
	o.SetPos("550px", "54px");
	
	$(o).click(function(){
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
	
		var value = $("#" + txtMoveEdit.id).val();
		//alert(value);
		
		var p = ui_last_click_div;
		//p = p.parentNode;  //取得父控件
		//p.zIndex = 999;  //奇怪，无效
		p.style.zIndex = 999; //ok
		//$(ui_last_click_div).css({"z-index": 999}); //ok
		
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});	
	//---------------------------------------------------------------
	//放后
	
	var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	o.SetId("btn_bring_to_top");
	
	//var btnHeightPosValue = o;
	o.Height("40px");
	//o.backgroundColor("#dddddd");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("放后");
	o.SetPos("600px", "54px");
	
	$(o).click(function(){
		//alert("段落被点击了。" + ui_last_click_div); 
		
		try{//这个过程太复杂，所以 try 一下看问题所在
	
		var value = $("#" + txtMoveEdit.id).val();
		//alert(value);
		
		var p = ui_last_click_div;
		//p = p.parentNode;  //取得父控件
		//p.zIndex = 999;  //奇怪，无效
		p.style.zIndex = 1; //ok
		//$(ui_last_click_div).css({"z-index": 999}); //ok
		
		
		}catch(e){
			print_error(e)
			throw e;
		}//try
	
	});	
	
	
	//---------------------------------------------------------------
	
		
}//
