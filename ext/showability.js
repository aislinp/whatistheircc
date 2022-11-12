import { champs } from '/objects.js';
import { cc } from '/objects.js';

export function showAbility() {
	event.stopPropagation();
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'videodiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
	const champ = this.id.replace('abilityimg', '');
	const ability = this.classList[1];
	const videoDiv = document.createElement('div');
	const videoClose = document.createElement('button');
	const videoTitle = document.createElement('h1');
	const videoContainer = document.createElement('video');
	const videoSource = document.createElement('source');
	var champObj;

	for (i = 0; i < champs.champions.length; i++) {
		if (champs.champions[i].name.replace(/\s|\.|\'|\&/g, "") == champ) {
			champObj = champs.champions[i];
		}
	}

	videoDiv.classList.add(ability);
	videoDiv.classList.add(champ);

	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';

	var champcc, title, currentCC, videoSRC, champNode, videoElements;

	for (i = 0; i < cc.champions.length; i++) {
		if (champ == cc.champions[i].name.replace(/\s|\.|\'|\&/g, "")) {
			champcc = cc.champions[i].cc;
			champNode = i + 46;
		}
	}

	for (i = 0; i < champcc.length; i++) {
		if (ability == champcc[i].key) {
			currentCC = champcc[i];
		}
	}

	const rightArrow = document.createElement('BUTTON');
	const leftArrow = document.createElement('BUTTON');
	rightArrow.innerHTML = '&#62;';
	leftArrow.innerHTML = '&#60;';
	rightArrow.id = 'rightArrow';
	leftArrow.id = 'leftArrow';
	rightArrow.addEventListener('click', switchDiv);
	leftArrow.addEventListener('click', switchDiv);

	if (champcc.length > 1) {
		if (champcc.indexOf(currentCC) == 0) {
			videoElements = [videoClose, videoTitle, videoContainer, rightArrow];
		} else if (champcc.indexOf(currentCC) == champcc.length - 1) {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer];
		} else {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, rightArrow];
		}
	} else {
		videoElements = [videoClose, videoTitle, videoContainer];
	}

	
	videoClose.addEventListener('click', closeDiv);
	window.addEventListener('keyup', function func(e) {
		if (e.key == 'Escape') {
			closeDiv();
			window.removeEventListener('keyup', func);
		} else if (e.key == 'ArrowRight' && videoElements.includes(rightArrow)) {
			switchDiv('right');
		} else if (e.key == 'ArrowLeft' && videoElements.includes(leftArrow)) {
			switchDiv('left');
		}
	});

	title = currentCC.key + ' - ' + currentCC.name;
	videoSRC = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + champObj.lolid + '/ability_' + champObj.lolid + '_' + currentCC.key + '1.webm';
	videoTitle.innerHTML = title;
	videoClose.innerHTML = '&times;';
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

function switchDiv(d) {
	var direction;
	if (typeof d == 'string') {
		direction = d;
	} else {
		direction = this.id.replace('Arrow', '');
	}
	const currentDiv = document.getElementById('videodiv');
	const currentKey = currentDiv.classList[0];
	const currentChamp = currentDiv.classList[1];
	var champObj, champsObj;

	for (i = 0; i < cc.champions.length; i++) {
		if (cc.champions[i].name.replace(/\s|\.|\'|\&/g, "") == currentChamp) {
			champObj = cc.champions[i];
		}
	}

	for (i = 0; i < champs.champions.length; i++) {
		if (champs.champions[i].name.replace(/\s|\.|\'|\&/g, "") == currentChamp) {
			champsObj = champs.champions[i];
		}
	}

	var nextKey;

	if (direction == 'right') {
		nextKey = champObj.cc[champObj.cc.indexOf(currentKey) + 2];
	} else {
		nextKey = champObj.cc[champObj.cc.indexOf(currentKey) + 1];
	}

	//start creation of videodiv
	//delete old videodiv
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'videodiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
	//create elements for videodiv
	const videoDiv = document.createElement('div');
	const videoClose = document.createElement('button');
	const videoTitle = document.createElement('h1');
	const videoContainer = document.createElement('video');
	const videoSource = document.createElement('source');

	var videoElements, champNode, title, videoSRC;

	//add classes of new key and champ
	videoDiv.classList.add(nextKey.key, currentChamp);

	//ids
	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';
	
	//get the node to place it behind
	for (i = 0; i < cc.champions.length; i++) {
		if (currentChamp == cc.champions[i].name.replace(/\s|\.|\'|\&/g, "")) {
			champNode = i + 46;
		}
	}

	//arrows
	const rightArrow = document.createElement('BUTTON');
	const leftArrow = document.createElement('BUTTON');
	rightArrow.innerHTML = '&#62;';
	leftArrow.innerHTML = '&#60;';
	rightArrow.id = 'rightArrow';
	leftArrow.id = 'leftArrow';
	rightArrow.addEventListener('click', switchDiv);
	leftArrow.addEventListener('click', switchDiv);

	//arrange elems

	if (champObj.cc.length > 1) {
		if (champObj.cc.indexOf(nextKey) == 0) {
			videoElements = [videoClose, videoTitle, videoContainer, rightArrow];
		} else if (champObj.cc.indexOf(nextKey) == champObj.cc.length - 1) {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer];
		} else {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, rightArrow];
		}
	}

	videoClose.addEventListener('click', closeDiv);
	window.addEventListener('keyup', function func(e) {
		if (e.key == 'Escape') {
			closeDiv();
			window.removeEventListener('keyup', func);
		} else if (e.key == 'ArrowRight' && videoElements.includes(rightArrow)) {
			switchDiv('right');
		} else if (e.key == 'ArrowLeft' && videoElements.includes(leftArrow)) {
			switchDiv('left');
		}
	});
	
	//append everything

	title = nextKey.key + ' - ' + nextKey.name;
	videoSRC = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + champsObj.lolid + '/ability_' + champsObj.lolid + '_' + nextKey.key + '1.webm';
	videoTitle.innerHTML = title;
	videoClose.innerHTML = '&times;';
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