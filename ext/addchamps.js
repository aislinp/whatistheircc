import { cc } from '/objects.js'; //still confused on how to import JSON files on safari/firefox/etc.. but this works.
import { champs } from '/objects.js';
import { buildAbilityDiv } from './showability.js';

//set up progress bar
var progress = document.getElementById('progress');
var value = 0, max = 0;
for (let i = 0; i < cc.champions.length; i++) {
	if(cc.champions[i].cc.length != 0){
		max += cc.champions[i].cc.length;
		for(let j = 0; j < cc.champions[i].cc.length; j++){
			if(cc.champions[i].cc[j].desc) {
				value++;
			}
		}
	}
}
progress.value = value;
progress.max = max;

//looping through all champs
for (let i = 0; i < champs.champions.length; i++) {
	//create divs and images for each
	const champDiv = document.createElement('div');
	const champImg = document.createElement('img');
	const favButton = document.createElement('img');
	champDiv.addEventListener('click', toggleDiv);
	favButton.addEventListener('click', favoriteChamp);
	favButton.addEventListener('click', setCookie);
	favButton.src = "/ext/icons/transparent.png";
	favButton.classList.add('favButton');
	champDiv.classList.add('champdiv');
	champImg.classList.add('champion');

	//loop through their lanes and add them as classes
	for (let g = 0; g < champs.champions[i].lanes.length; g++) {
		champDiv.classList.add(champs.champions[i].lanes[g]);
	}

	//check for spaces, periods, and apostrophes
	let regEx = /\s|\.|\'|\&/g
	champImg.id = champs.champions[i].name.replace(regEx, "");
	champDiv.id = champs.champions[i].name.replace(regEx, "").toLowerCase();
	favButton.id = champImg.id + "Button";
	favButton.alt = "Button to favorite " + champs.champions[i].name;

	//set the source for the image
	var imgFile = "/ext/champs/" + champImg.id + ".png";
	var imgAlt = "League of Legends default splash art of " + champs.champions[i].name;
	champImg.src = imgFile;
	champImg.alt = imgAlt;

	//label with name
	champDiv.innerText = champs.champions[i].name;
	champDiv.innerHTML += "<br>";

	champDiv.appendChild(favButton);
	champDiv.appendChild(champImg); //add image to div
	document.body.appendChild(champDiv); //add div to body
}

function toggleDiv() {
	//grab image from champdiv
	const divImg = this.getElementsByTagName('img')[1];
	//set up id names based on champ
	const idName = divImg.id + "ability";
	const imgIdName = divImg.id + 'abilityimg';
	//check if image is already filtered
	if (divImg.classList.contains('filtered')) {
		//if it is, get rid of abilities and make it unfiltered
		divImg.classList.remove('filtered');
		document.getElementById(idName).remove();
	} else {
		//if it isn't, set up abilities and filter
		divImg.classList.add('filtered');

		//loop through all champions
		for (let i = 0; i < cc.champions.length; i++) {
			const currentChamp = cc.champions[i];

			//check if the current champion is the correct one
			if (currentChamp.name.replace(/\s|\.|\'|\&/g, "") == divImg.id) {
				//create container for icons and keys
				const champCC = document.createElement("div");
				champCC.classList.add('ability');
				champCC.id = idName;

				//loop through their cc abilities
				for (let g = 0; g < currentChamp.cc.length; g++) {
					//create the image for the ability
					var currentImg = document.createElement('img');
					var currentFile;
					var currentKey = currentChamp.cc[g].key;
					currentImg.classList.add('abilityImg');
					currentImg.classList.add(currentKey);
					currentImg.id = imgIdName;
					//set the source for the icon
					currentFile = "ext/cc/" + currentChamp.name + "/icon/" + currentKey + ".png";
					currentImg.src = currentFile;

					//add the key
					champCC.innerHTML += currentKey;

					//append image to the container
					champCC.appendChild(currentImg);

					//line breaks
					champCC.innerHTML += "<br><br>";
				}
				this.appendChild(champCC);
			}
		}

		const listOfAbilities = document.getElementsByClassName('abilityImg');
		for (let i = 0; i < listOfAbilities.length; i++) { //add event listeners
			listOfAbilities[i].addEventListener('click', () => {
				buildAbilityDiv(listOfAbilities[i].classList[1], listOfAbilities[i].id.replace('abilityimg', ''));
			});
		}
	}
}

function favoriteChamp() {
	event.stopPropagation(); //no bubbling >:(
	const champName = this.id.replace("Button", ""); //get the champ that is being favorited
	const champ = document.getElementById(champName);
	if (champ.classList.contains("favorited")) { //if its already favorited...
		champ.classList.remove("favorited"); //unfavorite it
		this.src = "/ext/icons/transparent.png";
	} else { //if it isn't
		champ.classList.add("favorited"); //favorite it
		this.src = "/ext/icons/opaque.png";
	}
}
