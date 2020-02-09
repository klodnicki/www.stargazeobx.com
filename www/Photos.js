function loading() {
	if (sessionStorage.CurrentPhoto) {
		NewPic(sessionStorage.CurrentPhoto);
	}
}

function NewPic(ImgId) {
	ImgPath = "images/Photos/Big/" + ImgId + ".jpg";
	APath = "images/" + ImgId + ".jpg";
	CurrentPath = (document.getElementById('MainImage').src).split("http://www.stargazeobx.com/Redesign/");
	document.getElementById('ImageA').href = APath
	if (CurrentPath[1] != ImgPath) {
		document.getElementById('Loading').style.display = "block";
		document.getElementById('Photo').style.display = "none";
		document.getElementById('MainImage').src = ImgPath;
	}
	sessionStorage.CurrentPhoto = ImgId;
}
function DoneLoading() {
	document.getElementById('Photo').style.display = "block";
	document.getElementById('Loading').style.display = "none";
}