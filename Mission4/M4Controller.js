#pragma strict
var car:GameObject;
var van:GameObject;
var mainCamera:Camera;
var road:GameObject;
var existRoads:GameObject[] = new GameObject[6];
var roadIndex = 0;
var existVans:GameObject[] = new GameObject[18];
var vanIndex = 0;

var roadPosition:double = 0.0;
static var roadLengthUnit:float = 19.2;

function Start () {
	CreateRoad(3);
}

function Update () {
	mainCamera.transform.position.y = car.transform.position.y + 7;
}

function FixedUpdate() {
	if(roadPosition -  car.transform.position.y < roadLengthUnit) {
		CreateRoad(3);
	}

}

function CreateRoad(num:int) {
	for(var i = 0;  i < num; i++) {
		if(existRoads[roadIndex] != null){
			Destroy(existRoads[roadIndex]);
		}
		existRoads[roadIndex] = Instantiate(road, new Vector3(0, roadPosition + roadLengthUnit/2, 0), Quaternion.identity);
		roadIndex++;
		if(roadIndex == 6){
			roadIndex = 0;
		}
		
		if(existVans[vanIndex] != null){
			Destroy(existVans[vanIndex]);
		}
		existVans[vanIndex] = Instantiate(van, new Vector3(0, roadPosition + roadLengthUnit/2, 0), Quaternion.identity);
		vanIndex++;
		if(vanIndex == 18){
			vanIndex = 0;
		}
		
		roadPosition += roadLengthUnit;
	}
}
