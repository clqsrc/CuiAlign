/// <reference path="functions.js" />

//标准化 div 对齐算法 1

AddLog("load std_div_align.js");

function AssignDivAlignFunction(div)
{

	//根据 4 个对齐对象调整位置
	div.SetPos_forAlignObject = function()
	{
		var x1 = this.Left(); var y1 = this.Top();  //计算最后位置的 4 个角点位置，前两点
		var w = this.Width();
		var h = this.Height();
		
		//计算最后位置的 4 个角点位置，后两点 //因为算宽度非常不好控制对齐，对齐是根据 4 个角点而不是根据宽度的
		//所以要先计算 4 个角，再计算宽度
		var x2 = x1 + w;
		var y2 = y1 + h;
		
		//AddLog("div.SetPos_forAlignObject() " + this.GetParent());
		
		var p = this.GetParent();
		var p_w = p.offsetWidth;
		var p_h = p.offsetHeight;
		
		//---------------------------------------------------------------
		//左边位置有几种情况
		//1.pos
		//2.左对父控件
		//3.左对同级控件
		//4.右对父控件时，也可能修改。因为要整体右移
		
		//2.//如果左边对齐父控件
		if (p  == this.alignLeft) 
		{
			//x1 = "0px"; //移动起点 //不用这样，它就是数字，不用加 px
			x1 = 0;
			
			//用安卓的位置算法比较简单，允许在对齐时指定间隔数字
			//x1 = this.ui_marginLeft;  //等同于安卓的 layout_marginLeft，只有存在对齐物体时才起作用
			x1 = Number(this.ui_marginLeft);	//ui_marginLeft 这时候有可能是字符串，因为它是通过 json 或者 edit 得到的
				
		}//		
		
		//4.//如果左边没有对齐,右边有对齐时，也要改变 x1 的位置，因为这时候它要整体右移
		if (null == this.alignLeft && p == this.alignRight) 
		{
			//x1 = p_w - w; //移动起点
			x1 = p_w - w  - Number(this.ui_marginRight); //移动起点 //要计算间隔
		}//
		
		//---------------------------------------------------------------
		//右边位置有几种情况
		//1.pos
		//2.右对父控件
		//3.右对同级控件
		//4.左对父控件时，也可能修改。因为要整体左移 //其实就是 pos
		
		//2.//如果右边对齐父控件
		if (p == this.alignRight) 
		{
			//x2 = p_w; //移动终点
			x2 = p_w - Number(this.ui_marginRight);
		}//
				
		//---------------------------------------------------------------
		
		//如果顶边对齐父控件
		if (p == this.alignTop) 
		{
			y1 = this.ui_marginTop; 
		}//
		
		//如果顶对齐其他控件
		if (p != this.alignTop && null != this.alignTop)
		{
				y1 = this.alignTop.Top() + this.alignTop.Height();
				y2 = y1 + h;
		}//		
		
		//---------------------------------------------------------------
		//底边位置有几种情况
		//1.pos
		//2.底对父控件
		//3.底对同级控件
		//4.底对父控件时，也可能修改。因为要整体下移

		//2.//底对父控件
		if (p == this.alignBottom)
		{
			y1 = StrToInt(this.ui_marginTop); //alert(this.ui_marginTop);
			//y2 = p_h; 
			y2 = p_h - StrToInt(this.ui_marginBottom); 
			
			//2021.06.09 第一次修复，这时候的 ui_marginTop，ui_marginBottom 其实还是字符串，只是有时候有自动转换而已，应该显式地强制转换为数字类型
			//否则后面的设置 css 位置有时候是会出错的
		}//
		
		//4.底对父控件时，也可能修改。因为要整体下移
		if (null == this.alignTop && null != this.alignBottom)
		{
				//y1 = this.alignBottom.Top() + this.alignBottom.Height();
				y1 = this.alignBottom.Height() - h;
				y2 = y1 + h;
				
				//2021.8
				y1 = y1 - StrToInt(this.ui_marginBottom);
				y2 = y2 - StrToInt(this.ui_marginBottom);
		}//	

		//--------
		//这时已经得到了 4 个点，其实这时候对于 js 已经可以定位了，不过大多数 ui 是用宽高的，所以再算一下
		w = x2 - x1;
		h	= y2 - y1;

		//alert(y1);
		$(this).css({"left": x1, "top": y1, "width": w, "height": h});
		//alert($(this).css("top"));
		//AddLog("top:");
		//AddLog($(this).css("top"));
		//$(this).css("top", StrToInt(y1)); //no //因为这时候的 y1 可能是来自 ui_marginTop，而它还是原始的字符串
		//$(this).css("top", StrToInt(y1)); //ok //原因同上
		
		//if (this.ui_props && this.ui_props.get("text_left") == "true") //2021
		//	alert(this.ui_props.get("text_left"));
	
		this.reSetCaptionPos();

	}//

}//

AddLog("load std_div_align.js ok");
import_ok("std_div_align.js");