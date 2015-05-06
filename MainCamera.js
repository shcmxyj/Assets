#pragma strict

static var devHeight = 19.2;
static var devWidth = 10.8;
static var devAspect = 0.5625;
static var deltaHeight = 0.0;
static var deltaWidth = 0.0;

function Awake () {
	var orthographicSize = Screen.height / 200.0;
	Debug.Log(orthographicSize);
	
	var aspectRatio = Screen.width * 1.0 / Screen.height;
	Debug.Log(aspectRatio);
	
	if(aspectRatio >= devAspect){
		var cameraWidth = orthographicSize * 2 * aspectRatio;
		if(cameraWidth < devWidth){
			orthographicSize = devWidth / (2 * aspectRatio);
			deltaHeight = devHeight / 2 - orthographicSize;
		}
	}else{
		var cameraHeight = orthographicSize * 2;
		if(cameraHeight < devHeight){
			orthographicSize = devHeight / 2;
			deltaWidth = devWidth / 2 - orthographicSize * aspectRatio;
		}	
	}
	
	GetComponent(Camera).orthographicSize = orthographicSize;
	
}

function Update () {

}

 