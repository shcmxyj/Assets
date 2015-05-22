#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (coll: Collider2D) {
	L3Controller.foodNum--;

	var xPos = Mathf.Abs(transform.position.x);
	if(xPos == L3Controller.foodX1){
		L3Controller.point += 100;
	}else if(xPos == L3Controller.foodX2){
		L3Controller.point += 150;
	}else if(xPos == L3Controller.foodX3){
		L3Controller.point += 200;
	}
	
	Debug.Log(L3Controller.point);
	
	Destroy(gameObject);
}