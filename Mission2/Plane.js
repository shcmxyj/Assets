#pragma strict
var speed = 5.0;
var explode: GameObject;

function Start () {

}

function Update () {

}

function FixedUpdate() {
	var deltaX = Input.GetAxis("Mouse X");
	var deltaY = Input.GetAxis("Mouse Y");
	
	rigidbody2D.velocity = new Vector2(deltaX * speed, deltaY * speed);
}

function OnTriggerEnter2D(coll: Collider2D) {

	
	var p: GameObject = Instantiate(explode, gameObject.transform.position, gameObject.transform.rotation);
	p.particleSystem.Play();
	
	Destroy(coll.gameObject);
	Destroy(gameObject);
	GameController.failed = true;

}
