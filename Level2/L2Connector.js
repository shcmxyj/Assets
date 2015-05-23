#pragma strict
var sj2d: SliderJoint2D;
var controller: L2Controller;
var anim: Animator;
var woodAnim: Animator;
var newWoodAnim: Animator;

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
	GameController.status = 3;	
	anim.SetTrigger("Cut");
	yield WaitForSeconds(0.75);
	var score = controller.OneTouch(sj2d);
	if(score > 0) {
		L2Controller.point += score;
		Debug.Log(L2Controller.point);
		Destroy(GameObject.FindGameObjectWithTag("colorPiece"));
		Destroy(GameObject.FindGameObjectWithTag("flaw"));
		woodAnim.SetTrigger("Broken");
		yield WaitForSeconds(0.45);
		newWoodAnim.SetTrigger("NewWood");
		yield WaitForSeconds(0.1);
		controller.CreateNewColorPiece();

	}else{
 		anim.SetTrigger("CutFail");
 		yield WaitForSeconds(0.75);
	}
		
 	if(GameController.status != 2){
	 	transform.position.y = L2Controller.downPosition;
	 	sj2d.connectedBody.transform.position.y = L2Controller.downPosition;
	 	sj2d.angle = 90;
	 	sj2d.enabled = true;
	 	GameController.status = 0;
	 }
}
