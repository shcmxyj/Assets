#pragma strict

var speed = 0.005;

function Start () {

}

function Update () {

}

function FixedUpdate() {
//	var h = Input.GetAxis("Horizontal");
//	if(h != 0){
//		rigidbody2D.velocity = new Vector2(Mathf.Sign(h) * speed, 0);
//	}else{
//		rigidbody2D.velocity = new Vector2(0, 0);
//	}

	if (Input.touchCount > 0 &&
	Input.GetTouch(0).phase == TouchPhase.Moved) {

		// Get movement of the finger since last frame
		//获取手指自最后一帧的移动
		var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;

		// Move object across XY plane
		//移动物体在XY平面
		transform.Translate (touchDeltaPosition.x * speed, 0, 0);
	}
}


