#pragma strict
var anim:Animator;
static var upPosition:float = 6;
static var downPosition:float = -1.6;
var deltaY:float;

var colorPiece:GameObject;
var wood:GameObject;
var colorPieces:GameObject[];
var flaw:GameObject;
var flaws:GameObject[];

var speedTypes:int[];
var finishTimes = 0;
var successTimes = 0;

static var bodyHandDeltaY = 1.28;
var time:float = 45;

static var point:long = 0;

static var finishPointArray:int [] = [100, 200, 300, 500, 700, 900, 1200, 1500, 1800, 2200, 2600, 3000];
static var comboPointArray:int [] = [0, 0, 200, 500, 800, 1200, 1800, 2700, 5000];

function Start () {
	CreateNewColorPiece();
}

function Update () {

}

function FixedUpdate() {
	if(GameController.status != 2){	
		time -= Time.deltaTime;
		if(time <= 0) {
			GameController.status = 2;
			time = 0;
		}
	}
}

function OneTouch(line:SliderJoint2D) {
	if(line.connectedBody.transform.position.y - bodyHandDeltaY < colorPiece.transform.position.y + deltaY && 
		line.connectedBody.transform.position.y - bodyHandDeltaY > colorPiece.transform.position.y - deltaY) {
		if(finishTimes < 12) {
			finishTimes++;
		}
		successTimes++;
		if(finishTimes < 12)
			line.motor.motorSpeed = speedTypes[finishTimes];
		else
			line.motor.motorSpeed = speedTypes[11];
			
		if(successTimes > 8){
			successTimes = 8;
		}
		return  finishPointArray[finishTimes - 1] + comboPointArray[successTimes];
	}
	successTimes = 0;
	return 0;
}

function CreateNewColorPiece() {
	var temp:int = (finishTimes) / 3;
	
	if(temp > 3)
		temp = 3;
		
	if(temp == 0){
		deltaY = 0.6;
	}else if(temp == 1){
		deltaY = 0.45;
	}else if(temp == 2){
		deltaY = 0.3;
	}else{
		deltaY = 0.15;
	}
	var piecePositionY = Random.Range(-2.28, 4.12);
	colorPiece = Instantiate(colorPieces[temp], new Vector3(1.15, piecePositionY, 0), Quaternion.identity);
	flaw = Instantiate(flaws[temp], new Vector3(1.15, piecePositionY, 0), Quaternion.identity);
	wood.transform.position.y = piecePositionY - 0.64;
}