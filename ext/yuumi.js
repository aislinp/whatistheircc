import { cancels } from '/objects.js';
import { champs } from '/objects.js';
import { cc } from '/objects.js';

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

function buildAbilityDiv(key, champ) {
	champ = champ.replace(/\s|\.|\'|\&/g, "");
	event.stopPropagation(); //NO bubbling
	//delete videodiv
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'videodiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
	//div elems
	const videoDiv = document.createElement('div');
	const videoClose = document.createElement('button');
	const videoTitle = document.createElement('h1');
	const videoContainer = document.createElement('video');
	const videoSource = document.createElement('source');
	const videoDescription = document.createElement('div');

	var champObj, champNode, championsObj, champIndex;

	for (let i = 0; i < cancels.champions.length; i++) {
		if (cancels.champions[i].name.replace(/\s|\.|\'|\&/g, "") == champ) {
			champObj = cancels.champions[i];
			champNode = i + 46;
		}
	}

	for(let i = 0; i < champs.champions.length; i++){
		if (champs.champions[i].name.replace(/\s|\.|\'|\&/g, "") == champ){
			championsObj = champs.champions[i];
			champIndex = i;
		}
	}

	videoDiv.classList.add(key, champ);
	videoDescription.classList.add('videoDesc');

	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';

	var title, currentCC, videoSRC, videoElements, ccIndex, ccChampObj;
	var champCC = [];

	for (let i = 0; i < champObj.cc.length; i++) {
		champCC.push(champObj.cc[i].key);
		if (key == champObj.cc[i].key) {
			currentCC = champObj.cc[i];
			ccIndex = i;
		}
	}

	for (let i = 0; i < cc.champions[champIndex].cc.length; i++) {
		if (cc.champions[champIndex].cc[i].key == key) {
			ccChampObj = cc.champions[champIndex].cc[i];
		}
	}

	//arrows
	const rightArrow = document.createElement('BUTTON');
	const leftArrow = document.createElement('BUTTON');
	rightArrow.innerHTML = '&#62;';
	leftArrow.innerHTML = '&#60;';
	rightArrow.id = 'rightArrow';
	leftArrow.id = 'leftArrow';
	rightArrow.addEventListener('click', function f() {
		let nextKey = champObj.cc[ccIndex + 1].key;
		buildAbilityDiv(nextKey, champ);
	});
	leftArrow.addEventListener('click', function f() {
		let nextKey = champObj.cc[ccIndex - 1].key;
		buildAbilityDiv(nextKey, champ);
	});

	if (champObj.cc.length > 1) {
		if (ccIndex == 0) {
			videoElements = [videoClose, videoTitle, videoContainer, rightArrow, videoDescription];
		} else if (ccIndex == champObj.cc.length - 1) {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, videoDescription];
		} else {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, rightArrow, videoDescription];
		}
	} else {
		videoElements = [videoClose, videoTitle, videoContainer, videoDescription];
	}

	videoClose.addEventListener('click', closeDiv);
	window.addEventListener('keyup', function f(e) {
		if (e.key == 'Escape') {
			closeDiv();
			window.removeEventListener('keyup', f);
		} else if (e.key == 'ArrowRight' && videoElements.includes(rightArrow)) {
			let nextKey = champObj.cc[ccIndex + 1].key;
			buildAbilityDiv(nextKey, champ);
			window.removeEventListener('keyup', f);
		} else if (e.key == 'ArrowLeft' && videoElements.includes(leftArrow)) {
			let nextKey = champObj.cc[ccIndex - 1].key;
			buildAbilityDiv(nextKey, champ);
			window.removeEventListener('keyup', f);
		}else if (champCC.includes(e.key.toUpperCase()) && champObj.cc[ccIndex].key != e.key.toUpperCase()) {
			buildAbilityDiv(e.key.toUpperCase(), champ);
			window.removeEventListener('keyup', f);
		}
	});

	title = key + ' - ' + currentCC.name;
	videoSRC = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + championsObj.lolid + '/ability_' + championsObj.lolid + '_' + key + '1.webm';
	videoTitle.innerHTML = title;
	videoClose.innerHTML = '&times;';
	if (typeof ccChampObj.desc == "string") {
		videoDescription.innerHTML = ccChampObj.desc;
	} else {
		videoDescription.innerHTML = 'Description coming soon!';
	}
	videoSource.src = videoSRC;
	videoContainer.type = 'video/webm';
	videoContainer.autoplay = true;
	videoContainer.controls = true;
	videoContainer.loop = true;

	videoContainer.appendChild(videoSource);

	for (i = 0; i < videoElements.length; i++) {
		videoDiv.appendChild(videoElements[i]);
	}

	document.body.insertBefore(videoDiv, document.body.childNodes[champNode]);
}

function closeDiv() {
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'videodiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
}