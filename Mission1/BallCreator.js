#pragma strict

var spawnTime = 5;
var ball:GameObject;

function Start () {
	InvokeRepeating("Spawn", 0, spawnTime);
}

function Update () {
	
}

function Spawn() {
	if(GameController.status == 0){
		Instantiate(ball, new Vector3(0, 0, 0), transform.rotation);
	}else{
		CancelInvoke("Spawn");
	}
}