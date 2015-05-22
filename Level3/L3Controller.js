#pragma strict
var speed = 0.015;
var player:GameObject;
var time:float = 45.0;

static var playerInArea = 0;
static var unitForce = 0.3;
static var forceButton:boolean = true;
static var canMove:boolean = true;

static var point:long = 0;

var foodPre:GameObject;
static var foodX1:float = 3.0;
static var foodX2:float = 3.5;
static var foodX3:float = 4.0;

static var foodNum = 0;
var nextFoodX = 1;

function Start () {
	InvokeRepeating("CreateFood", 1, 1);
//	AddForce();
//	StartCoroutine(AddOppositeForce());
}

function Update () {

}

function FixedUpdate() {
	if(canMove && GameController.status == 0){
		if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
			// Get movement of the finger since last frame
			//获取手指自最后一帧的移动
			var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;

			// Move object across XY plane
			//移动物体在XY平面
			player.transform.Translate (touchDeltaPosition.x * speed, touchDeltaPosition.y * speed, 0);
			
			if(Mathf.Sign(touchDeltaPosition.x) != Mathf.Sign(player.transform.position.x)){
				forceButton = true;
			}
		}
	
	
		if(forceButton){
			var deltaX = Mathf.Abs(player.transform.position.x) - 0.5;
			var zone:int = 0;
			if(deltaX > 0) {
				zone = deltaX / 0.3;
				if(zone > 10)
					zone = 10;
				zone *= Mathf.Sign(player.transform.position.x);
			}
			AddForce(zone);
		}
	}
	
	time -= Time.deltaTime;
	
	if(time <= 0) {
		if(GameController.status == 0) {
			GameController.status = 2;
			player.rigidbody2D.velocity = new Vector2(0, 0);
		}
	}
}


function AddForce(area:int) {
	if(area != playerInArea){
		player.rigidbody2D.AddForce(new Vector2(unitForce * (area - playerInArea), 0), ForceMode2D.Impulse);
		playerInArea = area;
	}
}

function CreateFood() {
	if(canMove && GameController.status == 0 && foodNum < 6){
		var signX = Mathf.Sign(Random.Range(-1, 1));
	
		if(nextFoodX == 1){
			Instantiate(foodPre, new Vector3(signX * foodX1, Random.Range(-7.0, 7.0), 0), Quaternion.identity);
			nextFoodX = 2;
		}else if(nextFoodX == 2){
			Instantiate(foodPre, new Vector3(signX * foodX2, Random.Range(-7.0, 7.0), 0), Quaternion.identity);
			nextFoodX = 3;
		}else if(nextFoodX == 3){
			Instantiate(foodPre, new Vector3(signX * foodX3, Random.Range(-7.0, 7.0), 0), Quaternion.identity);
			nextFoodX = 1;
		}
		
		foodNum++;
	}
}
