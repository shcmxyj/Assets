#pragma strict
var speed = 0.02;
static var isHide = false;
static var punished = false;

function Start () {

}

function Update () {
	if(GameController.status == 0 && !punished){
		if(Input.touchCount > 0) {
			for(var i = 0; i < Input.touchCount; i++) {
				if(Input.GetTouch(i).phase == TouchPhase.Began) {
					if(Input.GetTouch(i).tapCount == 2){
						if(!isHide){
							isHide = true;
							transform.Translate(new Vector3(0, 3, 0));
						}else{
							isHide = false;
							transform.Translate(new Vector3(0, -3, 0));
						}
					}
					break;
				}
			}
			
			if(!isHide){
				if(Input.GetTouch(0).phase == TouchPhase.Moved) {
					var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
					transform.Translate (touchDeltaPosition.x * speed, 0, 0);
				}
			}
		}
	}
}