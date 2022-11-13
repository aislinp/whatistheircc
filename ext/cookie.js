const cookieButton = document.getElementById('cookieButton');
const helpButton = document.getElementById('helpButton');
cookieButton.addEventListener('click', toggleCookie);
helpButton.addEventListener('click', toggleHelp);

function setCookie() {
	if (document.cookie.includes('nocookie')) {
		return
	} else {
		const d = new Date();
		var cValue = document.getElementsByClassName("favorited");
		var cValue2 = "start";
		for (i = 0; i < cValue.length; i++) {
			a = "-" + cValue[i].id;
			cValue2 += a;
		}
		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
		let expires = "expires=" + d.toUTCString();
		document.cookie = "champlist=" + cValue2 + ";" + expires + ";path=/";
	}
}

function delCookie() {
	document.cookie = "champlist=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function noCookie() {
	document.cookie = "champlist=nocookie; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
}

function loadCookies() {
	const cookie = document.cookie;
	if (cookie == "") {
		cookieButton.innerHTML = 'turn off cookies';
		cookieButton.classList.add('on');
	} else if (cookie.includes('nocookie')) {
		cookieButton.innerHTML = 'turn on cookies';
		cookieButton.classList.add('off');
	} else {
		cookieArray = cookie.split(";");
		cookieList = cookieArray[0].split("=")[1].split("-");
		for (i = 1; i < cookieList.length; i++) {
			const champName = cookieList[i];
			const champ = document.getElementById(champName);
			const buttonId = champName + "Button";
			const champButton = document.getElementById(buttonId);
			champ.classList.add("favorited");
			champButton.innerHTML = "turn on cookies";
		}
		cookieButton.innerHTML = 'turn off cookies';
		cookieButton.classList.add('on');
	}
}

function toggleCookie() {
	if (cookieButton.classList.contains('on')) {
		noCookie();
		cookieButton.innerHTML = 'turn on cookies';
		cookieButton.classList.remove('on');
		cookieButton.classList.add('off');
	} else if (cookieButton.classList.contains('off')) {
		delCookie();
		cookieButton.innerHTML = 'turn off cookies';
		cookieButton.classList.add('on');
		cookieButton.classList.remove('off');
	}
}

function toggleHelp() {
	event.stopPropagation();
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'helpdiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
	const helpDiv = document.createElement('div');
	const helpClose = document.createElement('button');
	const helpText = document.createElement('H2');
	const helpText2 = document.createElement('H2');

	const helpElements = [helpClose, helpText, helpText2];

	helpDiv.id = 'helpdiv';
	helpClose.id = 'helpclose';

	helpClose.addEventListener('click', closeHelp);
	window.addEventListener('keyup', function func(e) {
		if (e.key == 'Escape') {
			closeHelp();
		}
		window.removeEventListener('keyup', func);
	});

	helpText.innerText = 'I use cookies to save which champions you have favorited. If the cookie icon is half-eaten, that means that you have chosen to block cookies from this site. If it is whole, cookies are currently being saved.';
	helpText2.innerText = 'To block or turn on cookies, simply click on the cookie icon!';
	helpClose.innerHTML = '&times;';

	for (i = 0; i < helpElements.length; i++) {
		helpDiv.appendChild(helpElements[i]);
	}

	document.body.insertBefore(helpDiv, document.body.childNodes[0]);
}

function closeHelp() {
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'helpdiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
}