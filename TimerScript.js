static var time1 = 0.0;
var guiStyle: GUIStyle;
var guiStyle2:GUIStyle;

function Start() {
	guiStyle2 = new GUIStyle();
	guiStyle2.fontSize = 20;
	guiStyle2.normal.textColor = Color.red;
}


function FixedUpdate () {
	if(GameController.status == 0)
		time1 += Time.deltaTime;
}
function OnGUI () {
	GUI.Label(Rect(20,20,100,20),getTime(time1), guiStyle);
	
	if(GameController.status == 1){
		GUI.Label(Rect(Screen.width/2 - 30,Screen.height/2 - 10,60,20), "FAILED", guiStyle2);
	}else if(GameController.status == 2) {
		GUI.Label(Rect(Screen.width/2 - 30,Screen.height/2 - 10,60,20), "FINISHED", guiStyle2);
	}
}

function getTime(time: float): String{
	if(time<0){
		return "00:00.00";
	}
	var lastTime : String = "";
	
	var minute = Mathf.FloorToInt(time/60%60);
	if(minute/10 >=1){
		lastTime += minute;
	}else{
		lastTime += "0" + minute;
	}
	var second = Mathf.FloorToInt(time%60);
	if(second/10 >=1){
		lastTime+=":";
	}else{
		lastTime +=":0";
	}
	
	lastTime += (time - minute*60).ToString("f2");
	return lastTime;
}