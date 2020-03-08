var current = new Date();

var hour = current.getHours();
var date = current.getDate();

if(date == 13) {
	if(hour < 7) {
		document.write("<img width='100%' src='media/goodMorningFri.jpg'>");
	}
	else if(hour < 11) {
		document.write("<img width='100%' src='media/roadToNashville.jpg'>");
	}
	else if(hour < 17) {
		document.write("<img width='100%' src='media/dayInNashville.jpg'>");
	}
	else if(hour < 22) {
		document.write("<img width='100%' src='media/eveningInNashville.jpg'>");
	}
	else {
		document.write("<img width='100%' src='media/goodNight.jpg'>");
	}
}
else if(date == 14) {
	if(hour < 8) {
		document.write("<img width='100%' src='media/goodMorningSat.jpg'>");
	}
	else if(hour < 17) {
		document.write("<img width='100%' src='media/dayInNashville.jpg'>");
	}
	else if(hour < 22) {
		document.write("<img width='100%' src='media/eveningInNashville.jpg'>");
	}
	else {
		document.write("<img width='100%' src='media/goodNight.jpg'>");
	}
}
else if(date == 15) {
	if(hour < 8) {
		document.write("<img width='100%' src='media/goodMorningSun.jpg'>");
	}
	else if(hour < 16) {
		document.write("<img width='100%' src='media/dayInNashville.jpg'>");
	}
	else if(hour < 22) {
		document.write("<img width='100%' src='media/roadToLoveland.jpg'>");
	}
	else {
		document.write("<img width='100%' src='media/farewell.jpg'>");
	}
}