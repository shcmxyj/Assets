#pragma strict
var needFinishTimes:int;
var finishTimes:int = 0;
var colorPiece:GameObject;
var colorPieces:GameObject[];
var deltaY:float;

static var yPosition:float;

function Start () {
	yPosition = 9.6 - MainCamera.deltaHeight;
	CreateNewColorPiece();
}

function Update () {

}

function FixedUpdate() {
	
}

function AddFinishTime () {
	finishTimes++;
	if(finishTimes >= needFinishTimes) {
		GameController.status = 2;
	}else{
		CreateNewColorPiece();
	}
}

function OneTouch(line:Rigidbody2D) {

	if(line.transform.position.y < colorPiece.transform.position.y + deltaY && 
		line.transform.position.y > colorPiece.transform.position.y - deltaY) {
		AddFinishTime();	
	}
}

function CreateNewColorPiece() {
	if(colorPiece != null){
		Destroy(colorPiece);
	}	
	
	if(finishTimes == 0){
		deltaY = 0.6;
	}else if(finishTimes == 1){
		deltaY = 0.3;
	}else if(finishTimes == 2){
		deltaY = 0.15;
	}
	colorPiece = Instantiate(colorPieces[finishTimes], new Vector3(0, Random.Range(-3.0, 7.0), 0), Quaternion.identity);
}