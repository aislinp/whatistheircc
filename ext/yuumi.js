import { cancels } from '/objects.js';
import { champs } from '/objects.js';
import { buildAbilityDiv } from './showability.js';

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

	//set the source for the image
	var imgFile = "/ext/champs/" + champImg.id + ".png";
	champImg.src = imgFile;

	//label with name
	champDiv.innerText = champs.champions[i].name;
	champDiv.innerHTML += "<br>";

	champDiv.appendChild(favButton);
	champDiv.appendChild(champImg); //add image to div
	document.body.appendChild(champDiv); //add div to body
}

function toggleDiv() {
	//grab image from champdiv and check if its dimmed
	const divImg = this.getElementsByTagName('img')[1];
	const idName = divImg.id + "ability";
	const imgIdName = divImg.id + 'abilityimg';
	if (divImg.classList.contains('filtered')) {
		divImg.classList.remove('filtered');
		document.getElementById(idName).remove();
	} else {
		divImg.classList.add('filtered');

		//loop through all champions
		for (let i = 0; i < cancels.champions.length; i++) {
			const currentChamp = cancels.champions[i];

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
		for (let i = 0; i < listOfAbilities.length; i++) {
			listOfAbilities[i].addEventListener('click', () => {
				buildAbilityDiv(listOfAbilities[i].classList[1], listOfAbilities[i].id.replace('abilityimg', ''));
			});
		}
	}
}

function favoriteChamp() {
	event.stopPropagation();
	const champName = this.id.replace("Button", "");
	const champ = document.getElementById(champName);
	if (champ.classList.contains("favorited")) {
		champ.classList.remove("favorited");
		this.src = "/ext/icons/transparent.png";
	} else {
		champ.classList.add("favorited");
		this.src = "/ext/icons/opaque.png";
	}
}
