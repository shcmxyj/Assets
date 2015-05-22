#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	L3Controller.playerInArea = 0;
	L3Controller.forceButton = false;
}

function OnTriggerEnter2D(coll: Collider2D) {
	if(coll.tag == "rest") {
		StartCoroutine(Eat());
	}
}

function Eat() {
	L3Controller.canMove = false;
	rigidbody2D.velocity = new Vector2(0, 0);
	yield WaitForSeconds(3);
	transform.Translate(new Vector3(-transform.position.x, -transform.position.y, 0));
	L3Controller.canMove = true;
	L3Controller.playerInArea = 0;
}