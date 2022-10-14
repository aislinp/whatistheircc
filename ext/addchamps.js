const champs = {
	"champions": [
		{ "name": "Aatrox", "lanes": ["Top"] },
		{ "name": "Ahri", "lanes": ["Mid"] },
		{ "name": "Akali", "lanes": ["Mid"] },
		{ "name": "Akshan", "lanes": ["Mid"] },
		{ "name": "Alistar", "lanes": ["Support", "Top"] },
		{ "name": "Amumu", "lanes": ["Jungle", "Support"] },
		{ "name": "Anivia", "lanes": ["Mid", "Support"] },
		{ "name": "Annie", "lanes": ["Mid"] },
		{ "name": "Aphelios", "lanes": ["ADC"] },
		{ "name": "Ashe", "lanes": ["ADC", "Support"] },
		{ "name": "Aurelion Sol", "lanes": ["Mid"] },
		{ "name": "Azir", "lanes": ["Mid"] },
		{ "name": "Bard", "lanes": ["Support"] },
		{ "name": "Bel'Veth", "lanes": ["Jungle"] },
		{ "name": "Blitzcrank", "lanes": ["Support"] },
		{ "name": "Brand", "lanes": ["Support"] },
		{ "name": "Braum", "lanes": ["Support"] },
		{ "name": "Caitlyn", "lanes": ["ADC"] },
		{ "name": "Camille", "lanes": ["Top", "Mid"] },
		{ "name": "Cassiopeia", "lanes": ["Mid"] },
		{ "name": "Cho'Gath", "lanes": ["Top"] },
		{ "name": "Corki", "lanes": ["Mid"] },
		{ "name": "Darius", "lanes": ["Top"] },
		{ "name": "Diana", "lanes": ["Jungle"] },
		{ "name": "Dr. Mundo", "lanes": ["Top"] },
		{ "name": "Draven", "lanes": ["ADC"] },
		{ "name": "Ekko", "lanes": ["Jungle", "Mid"] },
		{ "name": "Elise", "lanes": ["Jungle"] },
		{ "name": "Evelynn", "lanes": ["Jungle"] },
		{ "name": "Ezreal", "lanes": ["ADC"] },
		{ "name": "Fiddlesticks", "lanes": ["Jungle"] },
		{ "name": "Fiora", "lanes": ["Top"] },
		{ "name": "Fizz", "lanes": ["Mid"] },
		{ "name": "Galio", "lanes": ["Mid", "Support"] },
		{ "name": "Gangplank", "lanes": ["Mid", "Support"] },
		{ "name": "Garen", "lanes": ["Top", "Jungle"] },
		{ "name": "Gnar", "lanes": ["Top"] },
		{ "name": "Gragas", "lanes": ["Top", "Support"] }, //grag is a support i promise
		{ "name": "Graves", "lanes": ["Jungle"] },
		{ "name": "Gwen", "lanes": ["Top", "Jungle"] },
		{ "name": "Hecarim", "lanes": ["Jungle"] },
		{ "name": "Heimerdinger", "lanes": ["Mid"] },
		{ "name": "Illaoi", "lanes": ["Top"] },
		{ "name": "Irelia", "lanes": ["Top", "Mid"] },
		{ "name": "Ivern", "lanes": ["Jungle"] },
		{ "name": "Janna", "lanes": ["Support"] },
		{ "name": "Jarvan IV", "lanes": ["Jungle"] },
		{ "name": "Jax", "lanes": ["Top", "Jungle"] },
		{ "name": "Jayce", "lanes": ["Top", "Mid"] },
		{ "name": "Jhin", "lanes": ["ADC"] },
		{ "name": "Jinx", "lanes": ["ADC"] },
		{ "name": "Kai'Sa", "lanes": ["ADC"] },
		{ "name": "Kalista", "lanes": ["ADC"] },
		{ "name": "Karma", "lanes": ["Support", "Top"] },
		{ "name": "Karthus", "lanes": ["Jungle"] },
		{ "name": "Kassadin", "lanes": ["Mid"] },
		{ "name": "Katarina", "lanes": ["Mid"] },
		{ "name": "Kayle", "lanes": ["Top"] },
		{ "name": "Kayn", "lanes": ["Jungle"] },
		{ "name": "Kennen", "lanes": ["Top"] },
		{ "name": "Kha'Zix", "lanes": ["Jungle"] },
		{ "name": "Kindred", "lanes": ["Jungle"] },
		{ "name": "Kled", "lanes": ["Top", "Jungle"] },
		{ "name": "Kog'Maw", "lanes": ["ADC"] },
		{ "name": "LeBlanc", "lanes": ["Mid"] },
		{ "name": "Lee Sin", "lanes": ["Jungle"] },
		{ "name": "Leona", "lanes": ["Support"] },
		{ "name": "Lillia", "lanes": ["Top", "Jungle"] },
		{ "name": "Lissandra", "lanes": ["Mid"] },
		{ "name": "Lucian", "lanes": ["ADC", "Top", "Mid"] },
		{ "name": "Lulu", "lanes": ["Support"] }, //should be top too smh
		{ "name": "Lux", "lanes": ["Mid", "Support"] },
		{ "name": "Malphite", "lanes": ["Support", "Top", "Mid"] },
		{ "name": "Malzahar", "lanes": ["Mid"] },
		{ "name": "Maokai", "lanes": ["Top", "Support"] },
		{ "name": "Master Yi", "lanes": ["Jungle"] },
		{ "name": "Miss Fortune", "lanes": ["ADC", "Support"] },
		{ "name": "Mordekaiser", "lanes": ["Top"] },
		{ "name": "Morgana", "lanes": ["Support"] },
		{ "name": "Nami", "lanes": ["Support"] },
		{ "name": "Nasus", "lanes": ["Top"] },
		{ "name": "Nautilus", "lanes": ["Support"] },
		{ "name": "Neeko", "lanes": ["Mid"] },
		{ "name": "Nidalee", "lanes": ["Jungle"] },
		{ "name": "Nilah", "lanes": ["ADC"] },
		{ "name": "Nocturne", "lanes": ["Jungle", "Top", "Mid"] }, //apparently nocturne can go top and mid?? lolol
		{ "name": "Nunu & Willump", "lanes": ["Jungle", "Mid"] },
		{ "name": "Olaf", "lanes": ["Jungle", "Top"] },
		{ "name": "Orianna", "lanes": ["Mid", "Support"] },
		{ "name": "Ornn", "lanes": ["Top"] },
		{ "name": "Pantheon", "lanes": ["Mid", "Support", "Top"] },
		{ "name": "Poppy", "lanes": ["Top", "Jungle", "Support"] },
		{ "name": "Pyke", "lanes": ["Support", "Mid"] },
		{ "name": "Qiyana", "lanes": ["Mid"] },
		{ "name": "Quinn", "lanes": ["Top"] },
		{ "name": "Rakan", "lanes": ["Support"] },
		{ "name": "Rammus", "lanes": ["Jungle"] },
		{ "name": "Rek'Sai", "lanes": ["Jungle"] },
		{ "name": "Rell", "lanes": ["Support"] },
		{ "name": "Renata Glasc", "lanes": ["Support"] },
		{ "name": "Renekton", "lanes": ["Top", "Mid"] },
		{ "name": "Rengar", "lanes": ["Top", "Jungle"] },
		{ "name": "Riven", "lanes": ["Top"] },
		{ "name": "Rumble", "lanes": ["Top", "Mid"] },
		{ "name": "Ryze", "lanes": ["Mid"] },
		{ "name": "Samira", "lanes": ["ADC"] },
		{ "name": "Sejuani", "lanes": ["Jungle"] },
		{ "name": "Senna", "lanes": ["Support", "ADC"] },
		{ "name": "Seraphine", "lanes": ["Mid", "Support", "ADC"] },
		{ "name": "Sett", "lanes": ["Top", "Jungle", "Support"] },
		{ "name": "Shaco", "lanes": ["Jungle"] },
		{ "name": "Shen", "lanes": ["Top", "Support"] },
		{ "name": "Shyvana", "lanes": ["Jungle", "Top"] },
		{ "name": "Singed", "lanes": ["Top"] },
		{ "name": "Sion", "lanes": ["Top"] },
		{ "name": "Sivir", "lanes": ["ADC"] },
		{ "name": "Skarner", "lanes": ["Jungle"] },
		{ "name": "Sona", "lanes": ["Support"] },
		{ "name": "Soraka", "lanes": ["Support"] },
		{ "name": "Swain", "lanes": ["Mid", "Support", "Top", "ADC"] },
		{ "name": "Sylas", "lanes": ["Mid", "Top"] },
		{ "name": "Syndra", "lanes": ["Mid"] },
		{ "name": "Tahm Kench", "lanes": ["Top", "Support"] },
		{ "name": "Taliyah", "lanes": ["Jungle", "Mid"] },
		{ "name": "Talon", "lanes": ["Mid"] },
		{ "name": "Taric", "lanes": ["Support"] },
		{ "name": "Teemo", "lanes": ["Top"] },
		{ "name": "Thresh", "lanes": ["Support"] },
		{ "name": "Tristana", "lanes": ["ADC"] },
		{ "name": "Trundle", "lanes": ["Jungle", "Top"] },
		{ "name": "Tryndamere", "lanes": ["Top"] },
		{ "name": "Twisted Fate", "lanes": ["Mid"] },
		{ "name": "Twitch", "lanes": ["ADC"] },
		{ "name": "Udyr", "lanes": ["Jungle"] },
		{ "name": "Urgot", "lanes": ["Top"] },
		{ "name": "Varus", "lanes": ["ADC", "Mid"] },
		{ "name": "Vayne", "lanes": ["ADC", "Mid"] },
		{ "name": "Veigar", "lanes": ["Mid"] },
		{ "name": "Vel'Koz", "lanes": ["Mid", "Support"] },
		{ "name": "Vex", "lanes": ["Mid"] },
		{ "name": "Vi", "lanes": ["Jungle"] },
		{ "name": "Viego", "lanes": ["Jungle"] },
		{ "name": "Viktor", "lanes": ["Mid"] },
		{ "name": "Vladimir", "lanes": ["Mid", "Top"] },
		{ "name": "Volibear", "lanes": ["Top", "Jungle"] },
		{ "name": "Warwick", "lanes": ["Jungle", "Top"] },
		{ "name": "Wukong", "lanes": ["Top", "Jungle"] },
		{ "name": "Xayah", "lanes": ["ADC"] },
		{ "name": "Xerath", "lanes": ["Mid", "Support"] },
		{ "name": "Xin Zhao", "lanes": ["Jungle"] },
		{ "name": "Yasuo", "lanes": ["Mid", "Top", "ADC"] },
		{ "name": "Yone", "lanes": ["Mid", "Top", "ADC"] },
		{ "name": "Yorick", "lanes": ["Top"] },
		{ "name": "Yuumi", "lanes": ["Support"] }, //top too smh
		{ "name": "Zac", "lanes": ["Jungle", "Top", "Support"] },
		{ "name": "Zed", "lanes": ["Mid"] },
		{ "name": "Zeri", "lanes": ["ADC"] },
		{ "name": "Ziggs", "lanes": ["ADC", "Mid"] },
		{ "name": "Zilean", "lanes": ["Mid", "Support"] },
		{ "name": "Zoe", "lanes": ["Mid"] },
		{ "name": "Zyra", "lanes": ["Support"] }
	]
}

for (let i = 0; i < champs.champions.length; i++) {
	const champDiv = document.createElement("div");
	const champImg = document.createElement("img");
	champDiv.classList.add('champdiv');

	for (let g = 0; g < champs.champions[i].lanes.length; g++) {
		champDiv.classList.add(champs.champions[i].lanes[g]);
	}

	let regEx = /\s|\.|\'|\&/g //checks for spaces, periods, and apostrophes
	champImg.id = champs.champions[i].name.replace(regEx, "");
	champDiv.id = champs.champions[i].name.replace(regEx, "").toLowerCase();

	champImg.classList.add("champion");
	var imgFile = "/ext/champs/" + champImg.id + ".png";

	champImg.src = imgFile;
	
	champDiv.innerText = champs.champions[i].name;
	champDiv.innerHTML += "<br>";

	setTimeout(loadImage, 1000);
	
	function loadImage(){
		champDiv.appendChild(champImg);
	}
	
	document.body.appendChild(champDiv);
}
