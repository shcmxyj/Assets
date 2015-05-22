#pragma strict
var sj2d: SliderJoint2D;
var controller: L2Controller;
var anim: Animator;

function Start () {
	sj2d = GetComponent(SliderJoint2D);
	sj2d.useLimits = true;
	
}

function Update () {

}

function FixedUpdate() {
	if(GameController.status == 0){
		for(var i = 0; i < Input.touchCount; i++) {
			if(Input.GetTouch(i).phase == TouchPhase.Began) {
				StartCoroutine(WaitAndGoOn());		
			}
		}

		if(sj2d.connectedBody.transform.position.y >= L2Controller.upPosition) {
			transform.position.y = L2Controller.upPosition;
			sj2d.angle = -90;
		}else if(sj2d.connectedBody.transform.position.y <= L2Controller.downPosition) {
			transform.position.y = L2Controller.downPosition;
			sj2d.angle = 90;
		}
	}

}

function WaitAndGoOn() {
	sj2d.enabled = false;
	sj2d.connectedBody.rigidbody2D.velocity = new Vector2(0, 0);
	anim.SetTrigger("Cut");
	yield WaitForSeconds(1);
	var score = controller.OneTouch(sj2d);
	if(score > 0) {
		controller.CreateNewColorPiece();
		L2Controller.point += score;
		Debug.Log(L2Controller.point);
	}else{
 		anim.SetTrigger("CutFail");
 		yield WaitForSeconds(0.5);
	}
		
 	if(GameController.status != 2){
	 	transform.position.y = L2Controller.downPosition;
	 	sj2d.connectedBody.transform.position.y = L2Controller.downPosition;
	 	sj2d.angle = 90;
	 	sj2d.enabled = true;
	 }
}
