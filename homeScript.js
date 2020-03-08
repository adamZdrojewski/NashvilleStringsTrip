var current = new Date();
var date = current.getDate();
if(date != 13 && date != 14 && date != 15) {
	window.location.href = "pretrip.html";
}

//Sidenav
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
