var topButton = document.getElementById('topButton');
topButton.addEventListener('click', topClick);
function topClick() {
	const topLaners = document.getElementsByClassName('Top');

	if (topButton.innerHTML == 'Show Top Lane Champs!') {
		for (let i = 0; i < topLaners.length; i++) {
			topLaners[i].style.display = 'inline-block';
		}
		topButton.innerHTML = 'Hide Top Lane Champs!';
	} else {
		for (let i = 0; i < topLaners.length; i++) {
			topLaners[i].style.display = 'none';
		}
		topButton.innerHTML = 'Show Top Lane Champs!';
	}
}

var jgButton = document.getElementById('jgButton');
jgButton.addEventListener('click', jgClick);
function jgClick() {
	const jgLaners = document.getElementsByClassName('Jungle');

	if (jgButton.innerHTML == 'Show Jungle Champs!') {
		for (let i = 0; i < jgLaners.length; i++) {
			jgLaners[i].style.display = 'inline-block';
		}
		jgButton.innerHTML = 'Hide Jungle Champs!';
	} else {
		for (let i = 0; i < jgLaners.length; i++) {
			jgLaners[i].style.display = 'none';
		}
		jgButton.innerHTML = 'Show Jungle Champs!';
	}
}

var midButton = document.getElementById('midButton');
midButton.addEventListener('click', midClick);
function midClick() {
	const midLaners = document.getElementsByClassName('Mid');

	if (midButton.innerHTML == 'Show Mid Lane Champs!') {
		for (let i = 0; i < midLaners.length; i++) {
			midLaners[i].style.display = 'inline-block';
		}
		midButton.innerHTML = 'Hide Mid Lane Champs!';
	} else {
		for (let i = 0; i < midLaners.length; i++) {
			midLaners[i].style.display = 'none';
		}
		midButton.innerHTML = 'Show Mid Lane Champs!';
	}
}

var botButton = document.getElementById('botButton');
botButton.addEventListener('click', botClick);
function botClick() {
	const botLaners = document.getElementsByClassName('ADC');

	if (botButton.innerHTML == 'Show Bot Lane Champs!') {
		for (let i = 0; i < botLaners.length; i++) {
			botLaners[i].style.display = 'inline-block';
		}
		botButton.innerHTML = 'Hide Bot Lane Champs!';
	} else {
		for (let i = 0; i < botLaners.length; i++) {
			botLaners[i].style.display = 'none';
		}
		botButton.innerHTML = 'Show Bot Lane Champs!';
	}
}

var supButton = document.getElementById('supButton');
supButton.addEventListener('click', supClick);
function supClick() {
	const supLaners = document.getElementsByClassName('Support');

	if (supButton.innerHTML == 'Show Support Champs!') {
		for (let i = 0; i < supLaners.length; i++) {
			supLaners[i].style.display = 'inline-block';
		}
		supButton.innerHTML = 'Hide Support Champs!';
	} else {
		for (let i = 0; i < supLaners.length; i++) {
			supLaners[i].style.display = 'none';
		}
		supButton.innerHTML = 'Show Support Champs!';
	}
}

var searchChamps = document.getElementById("searchChamps");
searchChamps.addEventListener("keyup", search);

function search() {
	let regEx = /\s|\.|\'/g
	var filter = searchChamps.value.replace(regEx, "").toLowerCase();
	champs = document.getElementsByClassName("champdiv");
	for (i = 0; i < champs.length; i++) {
		champId = champs[i].id;
		if (champId.indexOf(filter) > -1) {
			champs[i].style.display = "inline-block";
		} else {
			champs[i].style.display = "none";
		}
	}
}
