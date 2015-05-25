#pragma strict
var customers:GameObject[];
var dirty0:GameObject;

function Start () {
	InvokeRepeating("CreateDirty", 0, 2);
	InvokeRepeating("CreateCustomer", 0, 5);
}

function Update () {

}

function CreateDirty() {
	if(GameController.status == 0){
		Instantiate(dirty0, new Vector3(Random.Range(-9, 9),0, 0), Quaternion.identity);
	}
}

function CreateCustomer() {
	if(GameController.status == 0){
		var num:int = Random.Range(0, customers.Length);
		var sign = Mathf.Sign(Random.Range(-1, 1));
		Instantiate(customers[num], new Vector3(sign * 11, 0, 0), Quaternion.identity);
	}
}