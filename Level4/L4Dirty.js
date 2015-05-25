#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (coll: Collider2D) {
	if(coll.tag == "player"){
		Destroy(gameObject);
	}
}