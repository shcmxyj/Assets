#pragma strict
var sj2d: SliderJoint2D;
var controller: Mission8Controller;

function Start () {
	sj2d = GetComponent(SliderJoint2D);
	sj2d.useLimits = true;
	
}

function Update () {

}

function FixedUpdate() {
	if(Input.touchCount > 0 && GameController.status == 0) {
		StartCoroutine(WaitAndGoOn());		
	}

	if(sj2d.connectedBody.transform.position.y >= Mission8Controller.yPosition) {
		transform.position.y = Mission8Controller.yPosition;
		sj2d.angle = -90;
	}else if(sj2d.connectedBody.transform.position.y <= -Mission8Controller.yPosition) {
		transform.position.y = -Mission8Controller.yPosition;
		sj2d.angle = 90;
	}

}

function WaitAndGoOn() {
	sj2d.enabled = false;
	sj2d.connectedBody.rigidbody2D.velocity = new Vector2(0, 0);
	GameController.status = 3;
 	yield WaitForSeconds(0.5);
 	controller.OneTouch(sj2d.connectedBody);
 	if(GameController.status != 2){
	 	transform.position.y = -Mission8Controller.yPosition;
	 	sj2d.connectedBody.transform.position.y = -Mission8Controller.yPosition;
	 	sj2d.angle = 90;
	 	sj2d.enabled = true;
	 	GameController.status = 0;
	 }
}