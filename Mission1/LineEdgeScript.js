#pragma strict

var speed = 3.0;

function Start () {

}

function Update () {

}

function FixedUpdate() {
	var h = Input.GetAxis("Horizontal");
	if(h != 0){
		rigidbody2D.velocity = new Vector2(Mathf.Sign(h) * speed, 0);
	}else{
		rigidbody2D.velocity = new Vector2(0, 0);
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if(coll.tag == "Ball"){
		Debug.Log(name);
		var ball:Rigidbody2D = coll.rigidbody2D;
		var xSpeed;
		var ySpeed;
		
		if(name == "LineLeftTopEdge"){
			ySpeed = -ball.velocity.y;
			if(ball.velocity.x > 0){
				xSpeed = -ball.velocity.x;	
			}else{
				xSpeed = ball.velocity.x;
			}
		}else if(name == "LineRightTopEdge"){
			ySpeed = -ball.velocity.y;
			if(ball.velocity.x > 0){
				xSpeed = ball.velocity.x;			
			}else{
				xSpeed = -ball.velocity.x;
			}
		}else{
			xSpeed = 0;
			ySpeed = ball.velocity.y;
		}	
		
		Debug.Log(xSpeed + " " + ySpeed);
		ball.velocity = new Vector2(xSpeed, ySpeed);
	}
}