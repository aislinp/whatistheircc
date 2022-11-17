//get buttons from doc
var topButton = document.getElementById('topButton');
var jgButton = document.getElementById('jgButton');
var midButton = document.getElementById('midButton');
var botButton = document.getElementById('botButton');
var supButton = document.getElementById('supButton');
var favButton = document.getElementById('favoriteButton');
var buttons = [topButton, jgButton, midButton, botButton, supButton, favButton];

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', toggleLaner);
}

function toggleLaner() {
	var laners, lane;
	//probably a more efficient way of doing this... oh Well
	const champions = document.getElementsByClassName('champdiv');
	if (this.id == "topButton") {
		laners = document.getElementsByClassName('Top');
		lane = 'Top Lane';
	} else if (this.id == "jgButton") {
		laners = document.getElementsByClassName('Jungle');
		lane = 'Jungle';
	} else if (this.id == 'midButton') {
		laners = document.getElementsByClassName('Mid');
		lane = 'Mid Lane';
	} else if (this.id == 'botButton') {
		laners = document.getElementsByClassName('ADC');
		lane = 'Bot Lane';
	} else if (this.id == 'supButton') {
		laners = document.getElementsByClassName('Support');
		lane = 'Support';
	} else {
		lane = 'Favorite';
	}

	//pretty simple.. if the button clicked says 'hide', hide the laners, else show them etc
	if (lane == 'Favorite') {
		if (this.innerHTML.includes('Only')) {
			this.innerHTML = 'Show All Champions!';
			for (let i = 0; i < champions.length; i++) {
				if (champions[i].getElementsByTagName('IMG')[1].classList.contains('favorited')) {
					champions[i].style.display = 'inline-block';
				} else {
					champions[i].style.display = 'none';
				}
			}
		} else {
			this.innerHTML = 'Show Only Favorites!';
			for (let i = 0; i < champions.length; i++) {
				champions[i].style.display = 'inline-block';
			}
		}
	} else {
		if (document.getElementById('favoriteButton').innerHTML.includes('Only')) {
			if (this.innerHTML.includes('Show')) {
				for (let i = 0; i < laners.length; i++) {
					laners[i].style.display = 'inline-block';
				}
				this.innerHTML = 'Hide ' + lane + ' Champs!';
			} else {
				for (let i = 0; i < laners.length; i++) {
					laners[i].style.display = 'none';
				}
				this.innerHTML = 'Show ' + lane + ' Champs!';
			}
		} else {
			if (this.innerHTML.includes('Show')) {
				for (let i = 0; i < laners.length; i++) {
					if (laners[i].getElementsByTagName('IMG')[1].classList.contains('favorited')) {
						laners[i].style.display = 'inline-block';
					}
				}
				this.innerHTML = 'Hide ' + lane + ' Champs!';
			} else {
				for (let i = 0; i < laners.length; i++) {
					laners[i].style.display = 'none';
				}
				this.innerHTML = 'Show ' + lane + ' Champs!';
			}
		}
	}
}

var searchChamps = document.getElementById("searchChamps");
searchChamps.addEventListener("keyup", search);

function search() { //thank you w3schools you are the GOAT
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
