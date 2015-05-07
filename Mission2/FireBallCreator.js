#pragma strict
var spawnTime = 5.0;
var fireBall: GameObject;
var location: String;
var ballNum = 8;

function Start () {
	InvokeRepeating("Spawn", 0, spawnTime);
}

function Update () {

}

function Spawn() {
if(GameController.status == 0){
	for(var i = 0; i < ballNum; i++) {
	var cloneBall:GameObject;
	var destination:Vector2;
	if(location == "LeftTop") {
		cloneBall = Instantiate(fireBall, new Vector3(-8, Random.Range(0, 12), 0), Quaternion.identity);
		destination = new Vector2(8, Random.Range(-28.8, 0));		
	}else if(location == "LeftGround") {
		cloneBall = Instantiate(fireBall, new Vector3(-8, Random.Range(-12, 0), 0), Quaternion.identity);
		destination = new Vector2(8, Random.Range(0, 28.8));		
	}else if(location == "RightTop") {
		cloneBall = Instantiate(fireBall, new Vector3(8, Random.Range(0, 12), 0), Quaternion.identity);
		destination = new Vector2(-8, Random.Range(-28.8, 0));		
	}else if(location == "RightGround") {
		cloneBall = Instantiate(fireBall, new Vector3(8, Random.Range(-12, 0), 0), Quaternion.identity);
		destination = new Vector2(-8, Random.Range(0, 28.8));		
	}else if(location == "Top") {
		cloneBall = Instantiate(fireBall, new Vector3(Random.Range(-5.4, 5.4), 15, 0), Quaternion.identity);
		destination = new Vector2(Random.Range(-8, 8), -15);		
	}else{
		cloneBall = Instantiate(fireBall, new Vector3(Random.Range(-5.4, 5.4), -15, 0), Quaternion.identity);
		destination = new Vector2(Random.Range(-8, 8), 15);		
	}
	
	var speedForce:int = Random.Range(2, 5);
	var deltaX = destination.x - cloneBall.transform.position.x;
	var deltaY = destination.y - cloneBall.transform.position.y;
	var speedZoom = Mathf.Sqrt(Mathf.Pow(deltaX, 2) + Mathf.Pow(deltaY, 2)) / speedForce;
	var xSpeed = deltaX / speedZoom;
	var ySpeed = deltaY / speedZoom;
	cloneBall.rigidbody2D.velocity = new Vector2(xSpeed, ySpeed);
	}
	}else{
		CancelInvoke("Spwan");
	}
	
}