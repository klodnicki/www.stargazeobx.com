<html>
<head>
<title>OBX Star Gaze</title>
<link rel="shortcut icon" href="Images/icon.ico">
<link rel="stylesheet" type="text/css" href="main.css">
<style type="text/css">
div#PhotoSpot {
	border: 3px outset #A28D72;
	width: 500;
	background-color: white;
}
div#Loading {
	display: none;
}
div#Photo {
	display: block;
}
img#MainImage {
	width: 500px;
}
div#ImgSelect img {
	width: 100px;
	display: inline;
	cursor: pointer;
}
</style>
<script src="Photos.js"></script>
</head>
<body onload="loading()">
	<?php include('PHPDocs/title.php'); ?>
<center><div id="container" align="center">
	<?php include('PHPDocs/menu.php'); ?>
	
	<php include('PHPDocs/NotAvailable.php'); ?>
<center><div id="PhotoSpot">
	<div id="Loading">
		<img src="Images/Photos/Loading.gif" class="noborder">
		<br>Loading...
	</div>
	<div id="Photo">
		<a href="Images/1.jpg" id="ImageA">
			<img src="Images/Photos/Big/1.jpg" id="MainImage" class="noborder" onload="DoneLoading()">
		</a>
	</div>
</div>
<div id="ImgSelect">
	<img src="Images/Photos/Thumb/1.jpg" class="noborder" onclick="NewPic(1)">
	<img src="Images/Photos/Thumb/2.jpg" class="noborder" onclick="NewPic(2)">
	<img src="Images/Photos/Thumb/3.jpg" class="noborder" onclick="NewPic(3)">
	<img src="Images/Photos/Thumb/4.jpg" class="noborder" onclick="NewPic(4)">
	<img src="Images/Photos/Thumb/5.jpg" class="noborder" onclick="NewPic(5)">
	<img src="Images/Photos/Thumb/6.jpg" class="noborder" onclick="NewPic(6)">
	<img src="Images/Photos/Thumb/7.jpg" class="noborder" onclick="NewPic(7)">
	<img src="Images/Photos/Thumb/8.jpg" class="noborder" onclick="NewPic(8)">
	<img src="Images/Photos/Thumb/9.jpg" class="noborder" onclick="NewPic(9)">
	<img src="Images/Photos/Thumb/10.jpg" class="noborder" onclick="NewPic(10)">
	<img src="Images/Photos/Thumb/11.jpg" class="noborder" onclick="NewPic(11)">
</div>
	
</div>
</center>
</body>
</html>