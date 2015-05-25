#pragma strict

function Start () {
	if(name.IndexOf("Left") >= 0) {
		transform.position.x += MainCamera.deltaWidth;		
	}else if(name.IndexOf("Right") >= 0) {
		transform.position.x -= MainCamera.deltaWidth;
	}else if(name.IndexOf("Top") >= 0) {		
		transform.position.y -= MainCamera.deltaHeight;
	}else if(name.IndexOf("Ground") >= 0) {
		transform.position.y += MainCamera.deltaHeight;
	}
}

function Update () {

}
