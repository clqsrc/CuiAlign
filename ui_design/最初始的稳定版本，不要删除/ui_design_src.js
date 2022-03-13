
//ui 设计器的 json 源码窗口

AddLog("load ui_design_src.js");

// import_("functions.js", true);
// import_("control_edit.js", true);
// import_("control_memo.js", true);

//---------------------------------------------------------------

//2021.8  统一定义要保存的属性
var design_prop_key_list = [
	//top 属性
	"top",
	"alignTop", //对齐的物体
	"ui_marginTop", //与对齐物体的间隔
	
	//左 属性
	"left",
	"alignLeft", //对齐的物体
	"ui_marginLeft",
	
	//右属性
	"right",
	"alignRight",  //对齐的物体
	"ui_marginRight",
	
	//bottom 属性
	"bottom",	
	"alignBottom",  //对齐的物体	
	"ui_marginBottom",
	

	"height",
	"width",
	"id", 
	"background-color",
	"raw_background-color",
	"caption", //"标题:",  "ui_props");
	"ui_class", //"类名:",  "ui_props");  //用来实现这个控件的实际类名 
	
	"border_top",  //"上边框:",  "ui_props");   //下边框是否显示. true , false
	"border_bottom",  //"下边框:",  "ui_props");   //下边框是否显示. true , false
	"border_left",  //"左边框:",  "ui_props");   //下边框是否显示. true , false
	"border_right",  //"右边框:",  "ui_props");   //下边框是否显示. true , false
	"border_color",  //"边框颜色",  "ui_props");   //边框色//默认全局
	"border_width",  //"边框宽度",  "ui_props");   //宽度//默认为 1,或者是全局最小宽度
	
	
	"border_radius",  //"圆角:",  "ui_props");   //圆角
	"ui_fontSize",  //直接操作 dom 属性
	"font-size", //"fs css",  "jquery_css", false);
	"text_left", //"标题靠左",  "ui_props");  //标题靠左
	"text_color", //"标题颜色",  "ui_props");  //标题颜色
	"ui_img_name", //"图片文件",  "ui_props");  //带图片的 view 还是太常见了，还是独立为一个类为好
	
	
	];
	
//---------------------------------------------------------------

var ui_design_src_form = null;
function ui_design_src_create(parent)
{
	var line = CreateStdDiv(parent);
	line.isDesign = true;  //表明自己是设计时的控件
	line.ValuesControl = CreateHashMap(); //属性值控件列表
	line.Height("500px");
	line.backgroundColor("#eeeeee");
	line.Width("250px"); //line.width("80%");
	//暂时 //显示在最上层
	line.ShowAtTop();
	line.border_radius("5px");
	line.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	line.SetPos("0px", "180px");
	
	line.alignLeft = line.GetParent();
	line.SetPos_forAlignObject();
	
	//源码编辑器
	var o = CreateMemoControl(line);
	//var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var txtMemo = o;
	o.Height("40px"); //有些原生 dom 有这个属性，所以要换一下
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	//o.SetCaption("top");
	o.SetPos("10px", "4px");
	o.alignTop = o.GetParent(); //parent;
	o.alignLeft = o.GetParent();
	o.alignBottom = o.GetParent();
	o.alignRight = o.GetParent();
	o.SetPos_forAlignObject();
	//alert(o.Left());
	//alert(o.Width());
	//alert(o.Height());

	//--------
	//设置源码
	//value_type 可以是  "jquery_css" 也可以是 "jquery_attrib"
	line.SetText = function (s)
	{
		//alert(s);
		$(txtMemo).val(s);
		//alert($(txtMemo).val());
	}//

	line.SetText("aaa");
	
	//保存按钮
	var o = CreateStdDiv(line);
	//var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnSave = o;
	o.Height("40px"); //有些原生 dom 有这个属性，所以要换一下
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("save");
	o._caption.backgroundColor("#888888");
	o.SetPos("10px", "4px");
	// o.alignTop = o.GetParent(); //parent;
	// o.alignLeft = o.GetParent();
	// o.alignBottom = o.GetParent();
	// o.alignRight = o.GetParent();
	//o.SetPos_forAlignObject();
	
	$(o).click(function(){ 
		SetSaveKey("src",  $(txtMemo).val());
		//alert(GetSaveKey("src"));
	});	
	
	//装载按钮
	var o = CreateStdDiv(line);
	//var o = CreateStdDiv(line);
	o.isDesign = true;  //表明自己是设计时的控件
	var btnLoad = o;
	o.Height("40px"); //有些原生 dom 有这个属性，所以要换一下
	//o.backgroundColor("#eeeeee");
	o.Width("40px");
	o.border_radius("5px");
	o.SetBorderWidth(true, true, true, true, "#cccccc", "1px");
	o.SetCaption("load");
	o._caption.backgroundColor("#888888");
	o.SetPos("60px", "4px");
	// o.alignTop = o.GetParent(); //parent;
	// o.alignLeft = o.GetParent();
	// o.alignBottom = o.GetParent();
	// o.alignRight = o.GetParent();
	//o.SetPos_forAlignObject();
	
	$(o).click(function(){ 
		//SetSaveKey("src",  $(txtMemo).val());
		//alert(GetSaveKey("src"));
		$(txtMemo).val(GetSaveKey("src"));
	});	
		
		
	//---------------------------------------------------------------
	ui_design_src_form = line;
	ui_design_src_form.Hide(); //先隐藏
	//$(ui_design_src_form).toggle();
	// ui_design_src_form.Show();
	return line;
	
}//

// function dom2Json(domtree) 
// {
// 	var obj = {};
// 	obj.name = domtree.tagName;
// 	obj.children = [];
// 	domtree.childNodes.forEach(
// 		//child => obj.children.push(dom2Json(child));
// 		child => obj.children.push(dom2Json(child))  //最后面加 "; " 号就不对了
// 	)
// 	return obj;
// }//

//ui 控件转换为 json
function UIControlToJson(dom_ui_control) 
{
	return json2string(_UIControlToJson(dom_ui_control));
}//

//ui 控件转换为 json
function _UIControlToJson(dom_ui_control) 
{
	var obj = {};  //这个就是 json 对象
	obj.name = dom_ui_control.tagName;
	//obj.children = [];  //放在后面再赋值，要不生成 json 时会显示在最上面，不好调试
	
	//obj.push(dom_ui_control.ui_props);
	
	function isNull(obj)
	{
		if (undefined != obj && null != obj)
			return false;
			
		return true;
	}
	
	function isNullProp(obj)
	{
		if (undefined == obj && null == obj)
			return true;
			
		if (undefined == obj.ui_props && null == obj.ui_props)
			return true;
			
		return false;
	}
	
	if (isNull(dom_ui_control.ui_props)) return null; //没有属性列表的一般是普通 dom ,不用保存
	if (isNull(dom_ui_control.ui_props.data)) return null; //没有属性列表的一般是普通 dom ,不用保存
	if (true == dom_ui_control.isControlPart) return null;  //caption 这样的只是控件的一部分，所以不用保存
	
	//----------------
	//有些属性是要最后计算的
	var con = dom_ui_control;
	// con.ui_props.put("left", con.Left());  //2021.8 似乎还是不要取实际值为好
	// con.ui_props.put("top", con.Top());
	// con.ui_props.put("width", con.Width());
	// con.ui_props.put("height", con.Height());
	
	//2021.8 统一取值的方式
	for (i=0; i<design_prop_key_list.length; i++)
	{
		var key = design_prop_key_list[i];
		
		if (key == "width")
		{
			var t = 0; //test 测试用的断点说一句而已
		}
		
		var value = GetPropValue(con, key); //这个在 ui_design_prop.js 文件当中
		
		//if (isNullProp(value)) value = "";  //不处理的话就会显示为 undefined
		if (value == undefined || value == null ) value = ""; 
		else value = String(value);
		
		con.ui_props.put(key, value);
	}
	
	if (!isNullProp(con.alignLeft)) 
	con.ui_props.put("alignLeft", con.alignLeft.ui_props.get("id"));
	if (!isNullProp(con.alignTop))
	con.ui_props.put("alignTop", con.alignTop.ui_props.get("id"));
	if (!isNullProp(con.alignRight))
	con.ui_props.put("alignRight", con.alignRight.ui_props.get("id"));
	if (!isNullProp(con.alignBottom))
	con.ui_props.put("alignBottom", con.alignBottom.ui_props.get("id"));
	
    //有问题,还不能取消
	// con.ui_props.put("ui_marginLeft", con.ui_marginLeft);
	// con.ui_props.put("ui_marginRight", con.ui_marginRight);
	// con.ui_props.put("ui_marginTop", con.ui_marginTop);
	// con.ui_props.put("ui_marginBottom", con.ui_marginBottom);
	
	
	con.ui_props.put("background-color", $(con).css("background-color")); //背景色
	
	//虚拟的字体尺寸
	//2021.10.26 似乎是不用特殊写入了//con.ui_props.put("ui_fontSize", con.ui_fontSize);
	if (String(con.ui_fontSize).length > 0)
	{
		con.ui_props.put("font-size", $(con).css("font-size"));
	}//
	
	//----------------
	
	//遍历要保存的属性
	for(var key in dom_ui_control.ui_props.data)  
	{
		var value = dom_ui_control.ui_props.data[key];
		obj[key] = value;
	}
	// dom_ui_control.childNodes.forEach(
	// 	//child => obj.children.push(dom2Json(child));
	// )
	
	
	obj.children = [];  //放在后面再赋值，要不生成 json 时会显示在最上面，不好调试
	
	//遍历子控件
	//alert(dom_ui_control.childNodes);
	//alert(dom_ui_control.childNodes.length);
	//for(var child in dom_ui_control.childNodes)   //不能这样遍历
	for(var i=0; i<con.childNodes.length; i++)  
	{
		var child = con.childNodes[i];
		var child_prop = _UIControlToJson(child);
		
		if (isNull(child_prop)) continue;
		
		obj.children.push(child_prop);
	}
	
	//return json2string(obj);
	return obj;
}//


//json 转换为 ui 控件
function JsonToUIControl(dom_parent, s) 
{
	try{//这个过程太复杂，所以 try 一下看问题所在
	
	var j = string2json(s);
	var p = dom_parent;
	
	return _JsonToUIControl(p, j);
	
	}catch(e){
		print_error(e)
		throw e;
	}//try
		
}//

//方便性函数，因为 js 对空物体会生成各种描述字符串
function ToString(value)
{
	if (value == undefined || value == null ) value = "";
	else value = String(value);
	
	return value;
}//

function _JsonToUIControl(dom_parent, json_obj) 
{
	//try{//这个过程太复杂，所以 try 一下看问题所在
	
	var j = json_obj; //string2json(s);
	var p = dom_parent;
	
	var o = CreateStdDiv(p);
	o.Width(j.width);	
	o.Height(j.height);
	
	//将 json 中保存的内容全部存给 dom 的 ui_props，这一步全部作为字符串，不做任何转换  //2021.8
	JsonToDom_UiProp(o, j);
	
	//2021.8 配置的值在 ui 中显示出变化  //本质上和属性编辑器共用一个函数
	Json_PropValue_Show(o, j);

	
	o.ui_marginLeft = j.ui_marginLeft;
	o.ui_marginTop = j.ui_marginTop;
	o.ui_marginRight = j.ui_marginRight;
	o.ui_marginBottom = j.ui_marginBottom;
	
	//字体比较特殊，按道理应该用统一的字体  //只有当明确设置了这个值时才去设置 css 的界面值
	o.ui_fontSize = j.ui_fontSize; //虚拟的字体尺寸
	
	if (String(o.ui_fontSize).length > 0)
	{
		$(o).css({"font-size": j["font-size"]});
	}//
	
	//对齐是最重要的  //将 id 转为具体的 dom 对象
	o.alignLeft = document.getElementById(j.alignLeft);
	o.alignTop = document.getElementById(j.alignTop);
	o.alignRight = document.getElementById(j.alignRight);
	o.alignBottom = document.getElementById(j.alignBottom);
	
	
	//o.SetCaption(j.caption);  /现在由 SetPropValue 处理了
	//o.SetId(j.id);  /现在由 SetPropValue 处理了
	//o.SetPos(j["left"], j["top"]);  //o.SetPos(j.left, j.top);  //一样的
	//o.SetPos(StrToInt(j["left"]), StrToInt(j["top"]));  //现在存的是字符串,要转换成整数才行 //现在由 SetPropValue 处理了
	
	o.SetPos_forAlignObject(); //对齐控件，其实现在只对齐了父控件，效果已经很好了. 如果还要对齐兄弟控件的话，就还要考虑创建的先后顺序，难度成倍上升
	
	//2021.8 统一设置值的方式
	for (i=0; i<design_prop_key_list.length; i++)
	{
		var key = design_prop_key_list[i];
		
		if (key == "width")
		{
			var t = 0; //test 测试用的断点说一句而已
		}
		
		var value = j[key];
		
		//if (value == undefined || value == null ) value = ""; 
		//else value = String(value);
		value = ToString(value);
		
		var in_create = true; //标明是在创建过程，象对齐这样的动作先不做，在创建完成后统一处理
		//in_create = false;  //test
		SetPropValue(o, key, value, in_create); //这个在 ui_design_prop.js 文件当中 //其实最好是不处理 SetPos_forAlignObject 相关的，以后再优化
		
		//con.ui_props.put(key, value);  //JsonToDom_UiProp 中已经做了
	}
	
	o.SetPos_forAlignObject();   //对齐放在最后调用一下就可以了，性能差别极大
	
	//--------  递归
	if ( j.children)
	for (var i=0; i< j.children.length; i++) { 
		var child = j.children[i];
		
		_JsonToUIControl(o, child);
		
	}//for
	
	return o;
	
	// }catch(e){
	// 	print_error(e)
	// 	throw e;
	// }//try
}//


//将 json 中保存的内容全部存给 dom 的 ui_props，这一步全部作为字符串，不做任何转换
function JsonToDom_UiProp(dom, json_obj) 
{
	//try{//这个过程太复杂，所以 try 一下看问题所在
	
	var j = json_obj; //string2json(s);
	//var p = dom_parent;
	
	var o = dom;  //注意这个 dom 必须是 CreateStdDiv(p) 产生的，否则是无效的

	for (i=0; i<design_prop_key_list.length; i++) 
	{
		var key = design_prop_key_list[i];
		var value = j[key];
		
		o.ui_props.put(key, value);
	}
	
	// o.ui_props.put("raw_background-color", j["raw_background-color"]); //背景色会被修改，所以要另外存原始值

	// o.ui_props.put("ui_class", j["ui_class"]); //实现类名
	// o.ui_props.put("text_left", j["text_left"]); //标题靠左  //2021.6
	// o.ui_props.put("text_color", j["text_color"]); //标题颜色 //2021.6
	

	
	// }catch(e){
	// 	print_error(e)
	// 	throw e;
	// }//try
}//

//2021.8 配置的值在 ui 中显示出变化
function Json_PropValue_Show(dom, json_obj) 
{
	//try{//这个过程太复杂，所以 try 一下看问题所在
	
	var j = json_obj; //string2json(s);
	//var p = dom_parent;
	
	var o = dom;  //注意这个 dom 必须是 CreateStdDiv(p) 产生的，否则是无效的

	for (i=0; i<design_prop_key_list.length; i++) 
	{
		var key = design_prop_key_list[i];
		var value = j[key];
		
		//o.ui_props.put(key, value);
		PropValue_Show(o, key, value);  //这个在 ui_design_prop.js 文件当中，除了对齐这几个特殊的属性外，生成控件时和修改属性值时的动作应该是一样的
		//对齐之所以不能这样做是因为对齐是批量的操作，最好一次到位，当然实际上也是可以的
	}

	
	// }catch(e){
	// 	print_error(e)
	// 	throw e;
	// }//try
}//




//复制时要更新 id ，用旧 id 会冲突
//2021.05.08
function _JsonSetNewIDforCopy(json_obj)
{
	json_obj.id = GetUI_NewID(); //给一个默认 新id
	
	var j = json_obj;
	
	if ( j.children)
	for (var i=0; i< j.children.length; i++) { 
		var child = j.children[i];
		
		_JsonSetNewIDforCopy(child);
		
	}//for	
}//


function json2string(json_obj)
{
	return JSON.stringify(json_obj);
}//

function string2json(s)
{
	var json_obj = JSON.parse(s);
	
	return json_obj;
}//

AddLog("load ui_design_src.js ok");
import_ok("ui_design_src.js");
