#pragma strict
var speedUnit = 0.05;
var speed = 0.0;

function Start () {

}

function Update () {

}

function FixedUpdate () {
	if(speed < 50){
		speed += speedUnit;
		rigidbody2D.velocity = new Vector2(0, speed);
	}
}