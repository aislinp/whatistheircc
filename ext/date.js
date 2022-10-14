const d = new Date();

let hour = d.getHours();
let mins = d.getMinutes();

if (mins < 10) {
	mins = "0" + mins;
}

let time = hour + ":" + mins

if (hour < 12) {
	document.getElementById('good').innerHTML = "Good morning! It is " + time + " am!";
}
if (hour == 12) {
	document.getElementById('good').innerHTML = "Good afternoon! It is " + time + " pm!";
}
if (hour > 12) {
	let normalhour = hour - 12;
	let normaltime = normalhour + ":" + mins;
	document.getElementById('good').innerHTML = "Good afternoon! It is " + normaltime + " pm!";
}
