#pragma strict

var speed: Vector2;
var speedForce = 8.0;

function Start() {
	var maxX = speedForce/2 * Mathf.Sqrt(3);
	var xSpeed = Random.Range(-1 * maxX, maxX);
	var ySpeed = Mathf.Sqrt(Mathf.Pow(speedForce, 2) - Mathf.Pow(xSpeed, 2));
	speed = new Vector2(xSpeed, -1 * ySpeed);
	
	var x = Random.Range((-MainCamera.devWidth/2 + MainCamera.deltaWidth) * 0.95, (MainCamera.devWidth/2 - MainCamera.deltaWidth) * 0.95);	
	transform.position = new Vector3(x, (MainCamera.devHeight/2 - MainCamera.deltaHeight)*0.95, 0);
//	Debug.Log(transform.position.x + " " + x);
	GetComponent(Rigidbody2D).velocity = speed;
//	rigidbody2D.velocity = speed;
}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	var speedNow = Mathf.Sqrt(Mathf.Pow(rigidbody2D.velocity.x, 2) + Mathf.Pow(rigidbody2D.velocity.y, 2));
	var xSpeed = rigidbody2D.velocity.x * speedForce / speedNow;
	var ySpeed = rigidbody2D.velocity.y * speedForce / speedNow;
	rigidbody2D.velocity = new Vector2(xSpeed, ySpeed);
	
//	Debug.Log(coll.gameObject.name);
//	Debug.Log(xSpeed + " " + ySpeed);
	
//	if(coll.gameObject.name == "Line1"){
//		Debug.Log(coll.transform.position.x + " " + coll.transform.position.y);
//	}
}