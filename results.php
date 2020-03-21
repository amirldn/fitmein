<!DOCTYPE html>
<?php

$startTime = $_GET["startDT"];
$endTime = $_GET["endDT"];
$locationName = $_GET["locationName"];

?>
<html lang="en">
<head>
	<link type="text/css" rel="stylesheet" href="css/FitMeIn_style.css"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
	<link rel="stylesheet" type="text/css" href="css/searchbar.css">

	<meta charset="UTF-8">
	<title>Results | FitMeIn</title>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<script type="text/javascript" src="js/auto.js"></script>
	<link type="text/css" rel="stylesheet" href="css/autocomplete.css"  media="screen,projection"/>
	<script type="text/javascript" src="js/fit.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>





</head>

<header>


</header>

<main>
	<!-- onload="myembedjs();" -->
	<body>
		<div class="navbar-fixed">
			<nav>
					<div class="nav-wrapper green darken-1 z-depth-2">
<!-- 		      			<a href="#" class="brand-logo">FitMeIn</a>
-->		      			<a href="index.html"><img id="FitMeInLogoNav" id="logo-container" src="./images/fitmein_logo_final.png" class="brand-logo"></a>
							<ul id="nav-mobile" class="right hide-on-med-and-down">
								<li><a href="itinerarySearch.html">Itinerary</a></li>
								<li><a href="legal.html">Legal</a></li>
								<li><a href="about.html">About</a></li>
						<li><a style="font-size: 20px">|</a>
						<li><a href="login.php"> Login </a>
							<li><a href="accountDetails.html"> My Account </a>


							</ul>
					</div>
				</nav>
			</div>

<br>
<br>
			<div class="container">
				<div class="row center">
					<div class="header col s12 light textShadow"><h2 style="color: white; font-size: 30px">This is what your day will look like...</h2></div>
				</div>
			</div>
			<br>

			<div class="container" style=" position: relative;
			margin: auto;
			width: 700px;
			height: 100px;">

			<div class="row">
	<div class="col s12 ">
		<div class="card z-depth-3 green darken-1">
			<div class="card-content green white-text">
				<span class="card-title center">FitMeIn found you a time!</span>
				<br>
				<p>You'll be able to go to <b><?php echo $locationName ?></b> on: </p>
				<p><?php echo $startTime ?></p>
				<p>and finish at </p>
				<p><?php echo $endTime ?></p>
			</div>
			<div class="card-action center">
				<a href="#">Search Again</a>
				<a href="#">Alternative Time</a>
				<a href="#">Add to Calendar</a>

			</div>
		</div>
	</div>
</div>

		</div>




















		<footer class="page-footer green darken-2 valign-wrapper" style="  position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 5%;">
								<div class="container">
									<div class="footer-copyright green darken-3" style="  position: fixed;
								left: 0;
								bottom: 0;
								width: 100%;
								height: 5%;">
										<div class="container" style="text-align: center" >
											<div style="color:silver;
																	font-size: 9px">
										BY USING THIS SERVICE, YOU AGREE TO THE FOLLOWING <a href="legal.html">TERMS AND CONDITIONS</a> (THE "AGREEMENT") GOVERNING YOUR USE OF FitMeIn ONLINE SERVICE (THE "SERVICE") AND <a href="legal.html">PRIVACY POLICY</a>.</div>
										<div style="color:white;
																font-size: 13px">
										© 2020 FitMeIn v0.8.9
										</div>
									</div>
								</div>
							</div>
			</footer>



<!--JavaScript at end of body for optimized loading-->
<script type="text/javascript" src="js/materialize.min.js"></script>
<script src="js/init.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU&libraries=places&callback=initAutocomplete"
				async defer></script>
</body>
</html>
</html>
