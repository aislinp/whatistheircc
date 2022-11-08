function setCookie() {
	if (document.cookie == "champlist=nocookie; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;") {
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
		return
	} else {
		cookieArray = cookie.split(";");
		cookieList = cookieArray[0].split("=")[1].split("-");
		for (i = 1; i < cookieList.length; i++) {
			const champName = cookieList[i];
			const champ = document.getElementById(champName);
			const buttonId = champName + "Button";
			const champButton = document.getElementById(buttonId);
			champ.classList.add("favorited");
			champButton.src = "/ext/icons/opaque.png";
		}
	}

}