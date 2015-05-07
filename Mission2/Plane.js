#pragma strict
var speed = 0.015;
var explode: GameObject;

function Start () {

}

function Update () {

}

function FixedUpdate() {
//	var deltaX = Input.GetAxis("Mouse X");
//	var deltaY = Input.GetAxis("Mouse Y");
//	
//	rigidbody2D.velocity = new Vector2(deltaX * speed, deltaY * speed);
	
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
		// Get movement of the finger since last frame
		//获取手指自最后一帧的移动
		var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;

		// Move object across XY plane
		//移动物体在XY平面
		transform.Translate (touchDeltaPosition.x * speed, touchDeltaPosition.y * speed, 0);
	}
}

function OnTriggerEnter2D(coll: Collider2D) {

	
	var p: GameObject = Instantiate(explode, gameObject.transform.position, gameObject.transform.rotation);
	p.particleSystem.Play();
	
	Destroy(coll.gameObject);
	Destroy(gameObject);
	GameController.status = 1;

}
