#pragma strict
var anim:Animator;
var currentArrows: GameObject[];
var arrowCombos: L1ArrowCombo[];
var index:int = 0;
static var point:long = 0;
var combo:int = 0;
var createIndex:int = 0;
static var comboLength = 272;

var flaw1:GameObject;
var flaw2:GameObject;
var currentFlaw:GameObject;

var process:int = 0;

function Start () {
	currentArrows = new GameObject[comboLength];
	audio.Play();
	CreateNewCombo();
//	InvokeRepeating("CreateNewCombo", 3.18f, 3.2f);
}

function Update () {

}

function FixedUpdate() {
	if(GameController.status == 0){
		if(currentArrows[index] != null){
			if(currentArrows[index].transform.position.x >= 4.8) {
				Destroy(currentArrows[index]);
				NextArrow();
				combo = 0;
			}
		}
		
		if(process == 1 && point > 6000){
			process = 2;
			Destroy(currentFlaw);
			currentFlaw = Instantiate(flaw2, flaw2.transform.position, flaw2.transform.rotation);
		}else if(process == 0 && point > 3000){
			process = 1;
			currentFlaw = Instantiate(flaw1, flaw1.transform.position, flaw1.transform.rotation);
		}
	}
}

function Click(isLeft:boolean) {
	if(GameController.status == 0){
		if((isLeft && currentArrows[index].tag == "Left") || (!isLeft && currentArrows[index].tag == "Right")) {
			var xPosition = currentArrows[index].transform.position.x;
			if(xPosition < 4.4 && xPosition > 3.6) {
				combo += 1;
				point += (1 - Mathf.Abs(xPosition - 4)) * 100 + 1;
				if(combo % 10 == 0) {
					point += combo * 10;
				}
				anim.SetTrigger("CutSuccess");
				Debug.Log(point + " " + combo);
				Destroy(currentArrows[index]);
				NextArrow();
				return;
			}else if(xPosition < 4.8 && xPosition > 3.2) {
				Destroy(currentArrows[index]);
				NextArrow();
			}		
		}
		combo = 0;
		anim.SetTrigger("CutFail");
	}
}

function NextArrow() {

	index++;
	if(index == comboLength){
		GameController.status = 2;
		return;
	}
	while(currentArrows[index] == null) {
		index++;
		if(index == comboLength){
			GameController.status = 2;
			break;
		}
	}

}

function CreateNewCombo() {
	var newCombo1: GameObject[] = arrowCombos[Random.Range(0, arrowCombos.Length)].arrows;	
//	var newCombo2: GameObject[] = arrowCombos[Random.Range(0, arrowCombos.Length)].arrows;
	
	var j:int;
	for(j = 0; j < comboLength; j++) {
		if(newCombo1[j] != null){
			if(newCombo1[j].tag == "Left"){
				currentArrows[j] = Instantiate(newCombo1[j], new Vector3(-15.2 - j*1.2, -2.8, 0), Quaternion.identity);
			}else{
				currentArrows[j] = Instantiate(newCombo1[j], new Vector3(-15.2 - j*1.2, -2.8, 0), new Quaternion(0, 180, 0, 0));
			}
		}else{
			currentArrows[j] = null;
		}
	}
	
//	for(j = comboLength/2; j < comboLength; j++) {
//		if(newCombo2[j - comboLength/2] != null){
//			if(newCombo2[j - comboLength/2].tag == "Left"){
//				currentArrows[j+createIndex] = Instantiate(newCombo2[j - comboLength/2], new Vector3(-15.2 - j*1.2, -2.2, 0), Quaternion.identity);
//			}else{
//				currentArrows[j+createIndex] = Instantiate(newCombo2[j - comboLength/2], new Vector3(-15.2 - j*1.2, -3.4, 0), new Quaternion(0, 180, 0, 0));
//			}
//		}else{
//			currentArrows[j+createIndex] = null;
//		}
//	}
	
//	if(createIndex == 0)
//		createIndex = comboLength;
//	else if(createIndex == comboLength)
//		createIndex = 0;
}
