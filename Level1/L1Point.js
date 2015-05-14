#pragma strict
var pointText:UI.Text;

function Start () {

}

function Update () {

}

function AddScore() {
	pointText.text = L1Controller.point + "";
}