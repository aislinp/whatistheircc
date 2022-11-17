//get buttons and add event listeners
var cookieButton = document.getElementById('cookieButton');
var helpButton = document.getElementById('helpButton');
cookieButton.addEventListener('click', toggleCookie);
helpButton.addEventListener('click', toggleHelp);

function setCookie() {
	if (document.cookie.includes('nocookie')) { //if user has turned off cookies, then return early
		return
	} else { //set the cookie
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

function delCookie() { //clear cookie
	document.cookie = "champlist=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function noCookie() { //turn off cookies
	document.cookie = "champlist=nocookie; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
}

function loadCookies() {
	const cookie = document.cookie; //get the cookie
	if (cookie == "") { //if the cookie is empty, they have not turned off cookies
		cookieButton.innerHTML = 'turn off cookies';
		cookieButton.classList.add('on');
	} else if (cookie.includes('nocookie')) { //turn off cookies
		cookieButton.innerHTML = 'turn on cookies';
		cookieButton.classList.add('off');
	} else { //there is something in the cookie that isn't 'nocookie'
		cookieArray = cookie.split(";");
		cookieList = cookieArray[0].split("=")[1].split("-");
		for (let i = 1; i < cookieList.length; i++) { //loop through cookie list and favorite them
			const champName = cookieList[i];
			const champ = document.getElementById(champName);
			const buttonId = champName + "Button";
			const champButton = document.getElementById(buttonId);
			champ.classList.add("favorited");
			champButton.src = "/ext/icons/opaque.png";
		}
		cookieButton.innerHTML = 'turn off cookies';
		cookieButton.classList.add('on');
	}
}

function toggleCookie() { //toggle whether or not cookies are on
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
	event.stopPropagation(); //no bubbling or else
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'helpdiv') { //delete the div if there is already one
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
	//create elements
	const helpDiv = document.createElement('div');
	const helpClose = document.createElement('button');
	const helpText = document.createElement('H2');
	const helpText2 = document.createElement('H2');

	const helpElements = [helpClose, helpText, helpText2];

	helpDiv.id = 'helpdiv';
	helpClose.id = 'helpclose';

	//add close listeners
	helpClose.addEventListener('click', closeHelp);
	window.addEventListener('keyup', function func(e) {
		if (e.key == 'Escape') {
			closeHelp();
		}
		window.removeEventListener('keyup', func);
	});

	//set the innertexts
	helpText.innerText = 'I use cookies to save which champions you have favorited.';
	helpText2.innerText = 'To block or turn on cookies, simply click on the cookie icon!';
	helpClose.innerHTML = '&times;';

	//append help elems
	for (i = 0; i < helpElements.length; i++) {
		helpDiv.appendChild(helpElements[i]);
	}

	//append to body
	document.body.insertBefore(helpDiv, document.body.childNodes[0]);
}

function closeHelp() {
	//delete help div
	for (i = 0; i < document.body.childNodes.length; i++) {
		if (document.body.childNodes[i].id == 'helpdiv') {
			document.body.removeChild(document.body.childNodes[i]);
		}
	}
}