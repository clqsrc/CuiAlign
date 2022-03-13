

//本地存储 

//参考 https://blog.csdn.net/yiyihuazi/article/details/105488563

function GetSaveKey(key)
{
	//localStorage.setItem("site", "js8.in");
	return localStorage.getItem(key);
}//

function SetSaveKey(k, v)
{
	//localStorage.setItem("site", "js8.in");
	localStorage.setItem(k, v);
}//


