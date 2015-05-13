#pragma strict
var anim:Animator;
var currentArrows: GameObject[];
var arrowCombos: L1ArrowCombo[];
var index:int = 0;
var point:long = 0;
var combo:int = 0;
var createIndex:int = 0;
var time1 = 0.0;
static var comboLength = 16;

function Start () {
	currentArrows = new GameObject[comboLength*2];
	CreateNewCombo();
	InvokeRepeating("CreateNewCombo", 3.18f, 4.8f);
}

function Update () {

}

function FixedUpdate() {
	if(currentArrows[index] != null){
		if(currentArrows[index].transform.position.x >= 4.8) {
			NextArrow();
			combo = 0;
		}
	}
	time1 += Time.deltaTime;

}

function Click(isLeft:boolean) {
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

function NextArrow() {

	index++;
	if(index == comboLength * 2){
		index = 0;
	}
	while(currentArrows[index] == null) {
		index++;
		if(index == comboLength * 2){
			index = 0;
		}
	}

}

function CreateNewCombo() {
	Debug.Log(time1);
	var newCombo1: GameObject[] = arrowCombos[Random.Range(0, arrowCombos.Length)].arrows;	
	var newCombo2: GameObject[] = arrowCombos[Random.Range(0, arrowCombos.Length)].arrows;
	
	var j:int;
	for(j = 0; j < comboLength/2; j++) {
		if(newCombo1[j] != null){
			if(newCombo1[j].tag == "Left"){
				currentArrows[j+createIndex] = Instantiate(newCombo1[j], new Vector3(-9 - j*1.2, -2.2, 0), Quaternion.identity);
			}else{
				currentArrows[j+createIndex] = Instantiate(newCombo1[j], new Vector3(-9 - j*1.2, -3.4, 0), new Quaternion(0, 180, 0, 0));
			}
		}else{
			currentArrows[j+createIndex] = null;
		}
	}
	
	for(j = comboLength/2; j < comboLength; j++) {
		if(newCombo2[j - comboLength/2] != null){
			if(newCombo2[j - comboLength/2].tag == "Left"){
				currentArrows[j+createIndex] = Instantiate(newCombo2[j - comboLength/2], new Vector3(-9 - j*1.2, -2.2, 0), Quaternion.identity);
			}else{
				currentArrows[j+createIndex] = Instantiate(newCombo2[j - comboLength/2], new Vector3(-9 - j*1.2, -3.4, 0), new Quaternion(0, 180, 0, 0));
			}
		}else{
			currentArrows[j+createIndex] = null;
		}
	}
	
	if(createIndex == 0)
		createIndex = comboLength;
	else if(createIndex == comboLength)
		createIndex = 0;
}
