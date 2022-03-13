
//界面生的 json ，以后用一个服务器接收就可以了

var ui_json_t1 = 
`
{
	"name": "DIV",
	"children": [{
		"name": "DIV",
		"children": [],
		"id": "pnlTop",
		"background-color":"rgb(100, 0, 0)",
		"caption": "new",
		"alignTop": "pnlMain",
		"top": 0,
		"height": 60,
		"alignLeft": "pnlMain",
		"alignRight": "pnlMain",
		"left": 5,
		"width": 100,
		"ui_marginLeft": 0,
		"ui_marginRight": 0,
		"ui_marginTop": 0,
		"ui_marginBottom": 0
	}],
	"id": "pnlMain",
	"caption": "line2",
	"background-color":"rgb(100, 100, 200)",
	"width": 400,
	"height": 602,
	"left": 0,
	"top": 216,
	"alignTop": "panel1",
	"ui_marginLeft": 0,
	"ui_marginRight": 0,
	"ui_marginTop": 0,
	"ui_marginBottom": 0
}



`
;

import_ok("ui_json_t1.js");

