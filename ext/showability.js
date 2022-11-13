import { cc } from '/objects.js';
import { champs } from '/objects.js';

export function buildAbilityDiv(key, champ) {
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

	var champObj, champNode;

	for (i = 0; i < cc.champions.length; i++) {
		if (cc.champions[i].name == champ) {
			champObj = cc.champions[i];
			champNode = i + 46;
		}
	}

	videoDiv.classList.add(key, champ);

	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';

	var title, currentCC, videoSRC, videoElements, ccIndex;

	for (let i = 0; i < champObj.cc.length; i++) {
		if (key == champObj.cc[i].key) {
			currentCC = champObj.cc[i];
			ccIndex = i;
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
		buildAbilityDiv(champ, nextKey);
	});
	leftArrow.addEventListener('click', function f() {
		let nextKey = champObj.cc[ccIndex - 1].key;
		buildAbilityDiv(champ, nextKey);
	});

	if (champObj.cc.length > 1) {
		if (ccIndex == 0) {
			videoElements = [videoClose, videoTitle, videoContainer, rightArrow];
		} else if (ccIndex == champObj.cc.length - 1) {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer];
		} else {
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, rightArrow];
		}
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
		}
	});

	title = key + ' - ' + currentCC.name;
	videoSRC = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + champs.champions[champNode - 46].lolid + '/ability_' + champs.champions[champNode - 46].lolid + '_' + key + '1.webm';
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