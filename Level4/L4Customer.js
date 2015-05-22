#pragma strict
var type:int;

function Start () {
	var sign = -Mathf.Sign(transform.position.x);
	if(type == 0) {
		rigidbody2D.velocity = new Vector2(2 * sign, 0);
		StartCoroutine(Type0Action());
	}else if(type == 1) {
		rigidbody2D.velocity = new Vector2(5 * sign, 0);
	}else if(type == 2) {
		rigidbody2D.velocity = new Vector2(3 * sign, 0);
		StartCoroutine(Type2Action());
	}else if(type == 3) {
		rigidbody2D.velocity = new Vector2(1 * sign, 0);
		StartCoroutine(Type3Action());
	}
}

function Update () {

}

function OnCollisionEnter2D(coll:Collision2D) {
	if(coll.gameObject.tag == "player"){
		StartCoroutine(Punish(coll.gameObject));
	}
}

function Punish(player:GameObject) {
	var speedOri = rigidbody2D.velocity;
	rigidbody2D.velocity = new Vector2(0, 0);
	player.rigidbody2D.velocity = new Vector2(0, 0);
	L4Player.punished = true;
	player.transform.Translate(0, 3, 0);
	L4Player.isHide = true;
	yield WaitForSeconds(3);
	
	L4Player.punished = false;
	rigidbody2D.velocity = speedOri;
}

function Type0Action() {
	var waitTime = Random.Range(5, 9);
	yield WaitForSeconds(waitTime);
	
	for(var i = 0; i < 4; i++) {
		rigidbody2D.velocity = -rigidbody2D.velocity;
		yield WaitForSeconds(3);
	}
}

function Type2Action() {
	var waitTime = Random.Range(4, 6);
	yield WaitForSeconds(waitTime);
	
	rigidbody2D.velocity = -rigidbody2D.velocity;
}

function Type3Action() {
	var speedOri:Vector2 = rigidbody2D.velocity;
	while(transform.position.x < 11) {
		var waitTime = Random.Range(6, 12);
		yield WaitForSeconds(waitTime);
		rigidbody2D.velocity = new Vector2(0, 0);
		yield WaitForSeconds(2);
		rigidbody2D.velocity = speedOri;
	}
}





