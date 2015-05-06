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

function OnTriggerEnter2D(coll: Collider2D) {
	if(coll.tag == "Ball") {
		if(name == "LeftSide" || name == "RightSide") {
			coll.rigidbody2D.velocity.x *= -1;
		}else if(name == "TopSide") {
			coll.rigidbody2D.velocity.y *= -1;
		}else if(name == "GroundSide") {
			Destroy(coll.gameObject);
			GameController.failed = true;
		}
	}
}