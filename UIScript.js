#pragma strict
var up:boolean;
var down:boolean;
var left:boolean;
var right:boolean;
var isHoriSide:boolean;
var isVertSide:boolean;

var rectTransform:RectTransform;

function Start () {
	rectTransform = GetComponent(RectTransform);

	if(up) {
		if(!isVertSide){
			rectTransform.position.y = (MainCamera.devHeight/2 - MainCamera.deltaHeight) * rectTransform.position.y / MainCamera.devHeight * 2;
		}else{
			rectTransform.position.y = (MainCamera.devHeight/2 - MainCamera.deltaHeight) - rectTransform.sizeDelta.y/200;
		}
	}
	
	if(down) {
		if(!isVertSide){
			rectTransform.position.y = (MainCamera.devHeight/2 - MainCamera.deltaHeight) * rectTransform.position.y / MainCamera.devHeight * 2;
		}else{
			rectTransform.position.y = rectTransform.sizeDelta.y/200 - (MainCamera.devHeight/2 - MainCamera.deltaHeight);
		}	
	}
	
	if(left) {
		if(!isHoriSide){
			rectTransform.position.x = (MainCamera.devWidth/2 - MainCamera.deltaWidth) * rectTransform.position.x / MainCamera.devWidth * 2;
		}else{
			rectTransform.position.x = rectTransform.sizeDelta.x/200 - (MainCamera.devWidth/2 - MainCamera.deltaWidth);
		}
	}
	
	if(right) {
		if(!isHoriSide){
			rectTransform.position.x = (MainCamera.devWidth/2 - MainCamera.deltaWidth) * rectTransform.position.x / MainCamera.devWidth * 2;
		}else{
			rectTransform.position.x = (MainCamera.devWidth/2 - MainCamera.deltaWidth) - rectTransform.sizeDelta.x/200;
		}
	}
	
	Debug.Log(rectTransform.position.x + " " + rectTransform.position.y);
}

function Update () {
	
}