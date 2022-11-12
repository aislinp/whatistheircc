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

	const videoElements = [videoClose, videoTitle, videoContainer];

	videoDiv.id = 'videodiv';
	videoClose.id = 'videobutton';

	videoClose.addEventListener('click', closeDiv);
	window.addEventListener('keyup', function func(e) {
		if (e.key == 'Escape') {
			closeDiv();
		}
		window.removeEventListener('keyup', func);
	});

	var champcc, title, currentCC, videoSRC, champNode;
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