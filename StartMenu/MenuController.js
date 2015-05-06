#pragma strict
function Start () {

}

function Update () {

}

function OnGUI() {
	if(GUI.Button(new Rect(Screen.width/2 - 50, 50, 100, 30), "Mission 1")) {
		Application.LoadLevel("1");
	}
	
	if(GUI.Button(new Rect(Screen.width/2 - 50, 100, 100, 30), "Mission 2")) {
		Application.LoadLevel("2");
	}
}

