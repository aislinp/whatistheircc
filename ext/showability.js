import { cc } from '/objects.js'; //like i said, no clue how to import from a JSON on safari/firefox/etc
import { champs } from '/objects.js'; //this works pretty well tho

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
	const videoDescription = document.createElement('div');

	var champObj, champNode;

	//get the node to place it behind
	for (i = 0; i < cc.champions.length; i++) {
		if (cc.champions[i].name.replace(/\s|\.|\'|\&/g, "") == champ) {
			champObj = cc.champions[i];
			champNode = i + 46;
		}
	}

	//set classes and ids
	videoDiv.classList.add(key, champ);
	videoDescription.classList.add('videoDesc');

	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';

	var title, currentCC, videoSRC, videoElements, ccIndex;
	var champCC = [];

	//get list of keys
	for (let i = 0; i < champObj.cc.length; i++) {
		champCC.push(champObj.cc[i].key);
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
		buildAbilityDiv(nextKey, champ);
	});
	leftArrow.addEventListener('click', function f() {
		let nextKey = champObj.cc[ccIndex - 1].key;
		buildAbilityDiv(nextKey, champ);
	});

	if (champObj.cc.length > 1) { //if there is more than one key
		if (ccIndex == 0) { //and the one we are on is the first one
			videoElements = [videoClose, videoTitle, videoContainer, rightArrow, videoDescription]; //add right arrow
		} else if (ccIndex == champObj.cc.length - 1) { //if it's the last one
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, videoDescription]; //add left arrow
		} else { //if we're between keys
			videoElements = [videoClose, videoTitle, leftArrow, videoContainer, rightArrow, videoDescription]; //add both
		}
	} else { //there is only one key, no arrows for us.
		videoElements = [videoClose, videoTitle, videoContainer, videoDescription];
	}

	//add event listeners
	//note: these were a pain in the *** to do. probably the part that took the longest to figure out
	videoClose.addEventListener('click', closeDiv);
	window.addEventListener('keyup', function f(e) { //create anon function
		if (e.key == 'Escape') {
			closeDiv();
			window.removeEventListener('keyup', f); //remove anon function IN the declaration
		} else if (e.key == 'ArrowRight' && videoElements.includes(rightArrow)) {
			let nextKey = champObj.cc[ccIndex + 1].key;
			buildAbilityDiv(nextKey, champ);
			window.removeEventListener('keyup', f);
		} else if (e.key == 'ArrowLeft' && videoElements.includes(leftArrow)) {
			let nextKey = champObj.cc[ccIndex - 1].key;
			buildAbilityDiv(nextKey, champ);
			window.removeEventListener('keyup', f);
		} else if (champCC.includes(e.key.toUpperCase()) && champObj.cc[ccIndex].key != e.key.toUpperCase()) {
			buildAbilityDiv(e.key.toUpperCase(), champ);
			window.removeEventListener('keyup', f);
		}
	});

	//set innerHTMl/text/src/etc for elements
	title = key + ' - ' + currentCC.name;
	videoSRC = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + champs.champions[champNode - 46].lolid + '/ability_' + champs.champions[champNode - 46].lolid + '_' + key + '1.webm';
	videoTitle.innerHTML = title;
	videoClose.innerHTML = '&times;';
	if (typeof currentCC.desc == "string") {
		videoDescription.innerHTML = currentCC.desc;
	} else {
		videoDescription.innerHTML = 'Description coming soon!';
	}
	videoSource.src = videoSRC;
	videoContainer.type = 'video/webm';
	videoContainer.autoplay = true;
	videoContainer.controls = true;
	videoContainer.loop = true;

	videoContainer.appendChild(videoSource); //append source to container

	for (i = 0; i < videoElements.length; i++) { //append elements
		videoDiv.appendChild(videoElements[i]);
	}

	document.body.insertBefore(videoDiv, document.body.childNodes[champNode]); //append to body
}

function closeDiv() { //delete video div
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'videodiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
}