//import champions and their cc
/*
import champs from './json/champs.json' assert { type: 'json' };
import cc from './json/cc.json' assert { type: 'json' };
*/
import { showAbility } from './showability.js';

const champs = {
	"champions": [
		{ "name": "Aatrox", "lanes": ["Top"], "lolid": "0266" },
		{ "name": "Ahri", "lanes": ["Mid"], "lolid": "0103" },
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
		{ "name": "Gragas", "lanes": ["Top", "Support"] },
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
		{ "name": "Lulu", "lanes": ["Support"] },
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
		{ "name": "Nocturne", "lanes": ["Jungle", "Top", "Mid"] },
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
		{ "name": "Yuumi", "lanes": ["Support"] },
		{ "name": "Zac", "lanes": ["Jungle", "Top", "Support"] },
		{ "name": "Zed", "lanes": ["Mid"] },
		{ "name": "Zeri", "lanes": ["ADC"] },
		{ "name": "Ziggs", "lanes": ["ADC", "Mid"] },
		{ "name": "Zilean", "lanes": ["Mid", "Support"] },
		{ "name": "Zoe", "lanes": ["Mid"] },
		{ "name": "Zyra", "lanes": ["Support"] }
	]
};

const cc = {
	"champions": [
		{ "name": "Aatrox", "cc": [{ "key": "W", "name": "Infernal Chains" }, { "key": "R", "name": "World Ender" }] },
		{ "name": "Ahri", "cc": [{ "key": "E", "name": "Charm" }] },
		{ "name": "Akali", "cc": [{ "key": "Q", "name": "Five Point Strike" }] },
		{ "name": "Akshan", "cc": [] },
		{ "name": "Alistar", "cc": [{ "key": "Q", "name": "Pulverize" }, { "key": "W", "name": "Headbutt" }, { "key": "E", "name": "Trample" }] },
		{ "name": "Amumu", "cc": [{ "key": "Q", "name": "Bandage Toss" }, { "key": "R", "name": "Curse of the Sad Mummy" }] },
		{ "name": "Anivia", "cc": [{ "key": "Q", "name": "Flash Frost" }, { "key": "R", "name": "Glacial Storm" }] },
		{ "name": "Annie", "cc": [{ "key": "P", "name": "Pyromania", "hard": "y" }] },
		{ "name": "Aphelios", "cc": [{ "key": "P", "name": "Gravitum" }, { "key": "Q", "name": "Gravitum - Active" }, { "key": "R", "name": "Moonlight Vigil" }] },
		{ "name": "Ashe", "cc": [{ "key": "P", "name": "Frost Shot" }, { "key": "W", "name": "Volley" }, { "key": "R", "name": "Enchanted Crystal Arrow" }] },
		{ "name": "Aurelion Sol", "cc": [{ "key": "Q", "name": "Starsurge" }, { "key": "R", "name": "Voice of Light" }] },
		{ "name": "Azir", "cc": [{ "key": "Q", "name": "Conquering Sands" }, { "key": "R", "name": "Emperor's Divide" }] },
		{ "name": "Bard", "cc": [{ "key": "Q", "name": "Cosmic Binding" }, { "key": "R", "name": "Tempered Fate" }] },
		{ "name": "Bel'Veth", "cc": [{ "key": "W", "name": "Above and Below" }] },
		{ "name": "Blitzcrank", "cc": [{ "key": "Q", "name": "Rocket Grab" }, { "key": "E", "name": "Power Fist" }, { "key": "R", "name": "Static Field" }] },
		{ "name": "Brand", "cc": [{ "key": "Q", "name": "Sear" }] },
		{ "name": "Braum", "cc": [{ "key": "P", "name": "Concussive Blows" }, { "key": "Q", "name": "Winter's Bite" }, { "key": "R", "name": "Glacial Fissure" }] },
		{ "name": "Caitlyn", "cc": [{ "key": "W", "name": "Yordle Snap Trap" }, { "key": "E", "name": "90 Caliber Net" }] },
		{ "name": "Camille", "cc": [{ "key": "W", "name": "Tactical Sweep" }, { "key": "E", "name": "Hookshot" }, { "key": "R", "name": "The Hextech Ultimatum" }] },
		{ "name": "Cassiopeia", "cc": [{ "key": "W", "name": "Miasma" }, { "key": "R", "name": "Petrifying Gaze" }] },
		{ "name": "Cho'Gath", "cc": [{ "key": "Q", "name": "Rupture" }, { "key": "W", "name": "Feral Scream" }, { "key": "E", "name": "Vorpal Spikes" }] },
		{ "name": "Corki", "cc": [{ "key": "W", "name": "Special Delivery" }] },
		{ "name": "Darius", "cc": [{ "key": "W", "name": "Crippling Strike" }, { "key": "E", "name": "Apprehend" }] },
		{ "name": "Diana", "cc": [{ "key": "R", "name": "Moonfall" }] },
		{ "name": "Dr. Mundo", "cc": [{ "key": "Q", "name": "Infected Bonesaw" }] },
		{ "name": "Draven", "cc": [{ "key": "E", "name": "Stand Aside" }] },
		{ "name": "Ekko", "cc": [{"key": "Q", "name": "Timewinder"}, { "key": "W", "name": "Parallel Convergence" }] },
		{ "name": "Elise", "cc": [{ "key": "E", "name": "Cocoon" }] },
		{ "name": "Evelynn", "cc": [{ "key": "W", "name": "Allure" }] },
		{ "name": "Ezreal", "cc": [] },
		{ "name": "Fiddlesticks", "cc": [{ "key": "Q", "name": "Terrify" }, { "key": "E", "name": "Reap" }] },
		{ "name": "Fiora", "cc": [{ "key": "W", "name": "Riposte" }, { "key": "E", "name": "Bladework" }] },
		{ "name": "Fizz", "cc": [{ "key": "R", "name": "Chum the Waters" }] },
		{ "name": "Galio", "cc": [{ "key": "W", "name": "Shield of Durand" }, { "key": "E", "name": "Justice Punch" }, { "key": "R", "name": "Hero's Entrance" }] },
		{ "name": "Gangplank", "cc": [{ "key": "E", "name": "Powder Keg" }, { "key": "R", "name": "Cannon Barrage" }] },
		{ "name": "Garen", "cc": [{ "key": "Q", "name": "Decisive Strike" }] },
		{ "name": "Gnar", "cc": [{ "key": "Q", "name": "Boomerang Throw / Boulder Toss" }, { "key": "W", "name": "Wallop" }, { "key": "R", "name": "GNAR!" }] },
		{ "name": "Gragas", "cc": [{ "key": "Q", "name": "Barrel Roll" }, { "key": "E", "name": "Body Slam" }, { "key": "R", "name": "Explosive Cask" }] },
		{ "name": "Graves", "cc": [{ "key": "W", "name": "Smoke Screen" }] },
		{ "name": "Gwen", "cc": [] },
		{ "name": "Hecarim", "cc": [{ "key": "E", "name": "Devastating Charge" }, { "key": "R", "name": "Onslaught of Shadows" }] },
		{ "name": "Heimerdinger", "cc": [{ "key": "E", "name": "CH-2 Electron Storm Grenade" }] },
		{ "name": "Illaoi", "cc": [{ "key": "E", "name": "Test of Spirit" }] },
		{ "name": "Irelia", "cc": [{ "key": "E", "name": "Flawless Duet" }, { "key": "R", "name": "Vanguard's Edge" }] },
		{ "name": "Ivern", "cc": [{ "key": "Q", "name": "Rootcaller" }, { "key": "E", "name": "Triggerseed" }, { "key": "R", "name": "Daisy!" }] },
		{ "name": "Janna", "cc": [{ "key": "Q", "name": "Howling Gale" }, { "key": "W", "name": "Zephyr" }, { "key": "R", "name": "Monsoon" }] },
		{ "name": "Jarvan IV", "cc": [{ "key": "Q", "name": "Dragon Strike" }, { "key": "W", "name": "Golden Aegis" }] },
		{ "name": "Jax", "cc": [{ "key": "E", "name": "Counter Strike" }] },
		{ "name": "Jayce", "cc": [{ "key": "Q", "name": "To the Skies!" }, { "key": "E", "name": "Thundering Blow" }] },
		{ "name": "Jhin", "cc": [{ "key": "W", "name": "Deadly Flourish" }, { "key": "E", "name": "Captive Audience" }, { "key": "R", "name": "Curtain Call" }] },
		{ "name": "Jinx", "cc": [{ "key": "W", "name": "Zap!" }, { "key": "E", "name": "Flame Chompers!" }] },
		{ "name": "Kai'Sa", "cc": [] },
		{ "name": "Kalista", "cc": [{ "key": "R", "name": "Fate's Call" }] },
		{ "name": "Karma", "cc": [{ "key": "Q", "name": "Inner Flame" }, { "key": "E", "name": "Focused Resolve" }] },
		{ "name": "Karthus", "cc": [{ "key": "W", "name": "Wall of Pain" }] },
		{ "name": "Kassadin", "cc": [{ "key": "E", "name": "Force Pulse" }] },
		{ "name": "Katarina", "cc": [] },
		{ "name": "Kayle", "cc": [{ "key": "Q", "name": "Radiant Blast" }] },
		{ "name": "Kayn", "cc": [{ "key": "W", "name": "Blade's Reach" }] },
		{ "name": "Kennen", "cc": [{ "key": "P", "name": "Mark of the Storm" }] },
		{ "name": "Kha'Zix", "cc": [{ "key": "P", "name": "Unseen Threat" }, { "key": "W", "name": "Evolved Spike Racks" }] },
		{ "name": "Kindred", "cc": [{ "key": "E", "name": "Mounting Dread" }] },
		{ "name": "Kled", "cc": [{ "key": "Q", "name": "Bear Trap on a Rope" }, { "key": "R", "name": "CHAAAAAAAARGE!!!" }] },
		{ "name": "Kog'Maw", "cc": [{ "key": "E", "name": "Void Ooze" }] },
		{ "name": "LeBlanc", "cc": [{ "key": "E", "name": "Ethereal Chains" }] },
		{ "name": "Lee Sin", "cc": [{ "key": "E", "name": "Cripple" }, { "key": "R", "name": "Dragon's Rage" }] },
		{ "name": "Leona", "cc": [{ "key": "Q", "name": "Shield of Daybreak" }, { "key": "E", "name": "Zenith Blade" }, { "key": "R", "name": "Solar Flare" }] },
		{ "name": "Lillia", "cc": [{ "key": "E", "name": "Swirlseed" }, { "key": "R", "name": "Lilting Lullaby" }] },
		{ "name": "Lissandra", "cc": [{ "key": "P", "name": "Iceborn Subjugation" }, { "key": "Q", "name": "Ice Shard" }, { "key": "W", "name": "Ring of Frost" }, { "key": "R", "name": "Frozen Tomb" }] },
		{ "name": "Lucian", "cc": [] },
		{ "name": "Lulu", "cc": [{ "key": "Q", "name": "Glitterlance" }, { "key": "W", "name": "Whimsy" }, { "key": "R", "name": "Wild Growth" }] },
		{ "name": "Lux", "cc": [{ "key": "Q", "name": "Light Binding" }, { "key": "E", "name": "Lucent Singularity" }] },
		{ "name": "Malphite", "cc": [{ "key": "Q", "name": "Seismic Shard" }, { "key": "R", "name": "Unstoppable Force" }] },
		{ "name": "Malzahar", "cc": [{ "key": "Q", "name": "Call of the Void" }, { "key": "R", "name": "Nether Grasp" }] },
		{ "name": "Maokai", "cc": [{ "key": "Q", "name": "Bramble Smash" }, { "key": "W", "name": "Twisted Advance" }, { "key": "R", "name": "Nature's Grasp" }] },
		{ "name": "Master Yi", "cc": [] },
		{ "name": "Miss Fortune", "cc": [{ "key": "E", "name": "Make it Rain" }] },
		{ "name": "Mordekaiser", "cc": [{ "key": "E", "name": "Death's Grasp" }, { "key": "R", "name": "Realm of Death" }] },
		{ "name": "Morgana", "cc": [{ "key": "Q", "name": "Dark Binding" }, { "key": "R", "name": "Soul Shackles" }] },
		{ "name": "Nami", "cc": [{ "key": "Q", "name": "Aqua Prison" }, { "key": "E", "name": "Tidecaller's Blessing" }, { "key": "R", "name": "Tidal Wave" }] },
		{ "name": "Nasus", "cc": [{ "key": "W", "name": "Wither" }] },
		{ "name": "Nautilus", "cc": [{ "key": "P", "name": "Staggering Blow" }, { "key": "Q", "name": "Dredge Line" }, { "key": "E", "name": "Riptide" }, { "key": "R", "name": "Depth Charge" }] },
		{ "name": "Neeko", "cc": [{ "key": "E", "name": "Tangle-Barbs" }, { "key": "R", "name": "Pop Blossom" }] },
		{ "name": "Nidalee", "cc": [] },
		{ "name": "Nilah", "cc": [{ "key": "R", "name": "Apotheosis" }] },
		{ "name": "Nocturne", "cc": [{ "key": "E", "name": "Unspeakable Horror" }, { "key": "R", "name": "Paranoia" }] },
		{ "name": "Nunu & Willump", "cc": [{ "key": "W", "name": "Biggest Snowball Ever!" }, { "key": "E", "name": "Snowball Barrage" }, { "key": "R", "name": "Absolute Zero" }] },
		{ "name": "Olaf", "cc": [{ "key": "Q", "name": "Undertow" }] },
		{ "name": "Orianna", "cc": [{ "key": "W", "name": "Command: Dissonance" }, { "key": "Command: Shockwave" }] },
		{ "name": "Ornn", "cc": [{ "key": "Q", "name": "Volcanic Rupture" }, { "key": "E", "name": "Searing Charge" }, { "key": "R", "name": "Call of the Forge God" }] },
		{ "name": "Pantheon", "cc": [{ "key": "W", "name": "Shield Vault" }] },
		{ "name": "Poppy", "cc": [{ "key": "Q", "name": "Hammer Shock" }, { "key": "W", "name": "Steadfast Presence" }, { "key": "E", "name": "Heroic Charrge" }, { "key": "R", "name": "Keeper's Verdict" }] },
		{ "name": "Pyke", "cc": [{ "key": "Q", "name": "Bone Skewer" }, { "key": "E", "name": "Phantom Undertow" }] },
		{ "name": "Qiyana", "cc": [{ "key": "R", "name": "Supreme Display of Talent" }] },
		{ "name": "Quinn", "cc": [{ "key": "E", "name": "Vault" }] },
		{ "name": "Rakan", "cc": [{ "key": "W", "name": "Grand Entrance" }, { "key": "R", "name": "The Quickness" }] },
		{ "name": "Rammus", "cc": [{ "key": "Q", "name": "Powerball" }, { "key": "E", "name": "Frenzying Taunt" }, { "key": "R", "name": "Soaring Slam" }] },
		{ "name": "Rek'Sai", "cc": [{ "key": "W", "name": "Un-Burrow" }] },
		{ "name": "Rell", "cc": [{ "key": "W", "name": "Ferromancy: Crash Down" }, { "key": "E", "name": "Attract and Repel" }, { "key": "R", "name": "Magnet Storm" }] },
		{ "name": "Renata Glasc", "cc": [{ "key": "Q", "name": "Handshake" }, { "key": "E", "name": "Loyalty Program" }, { "key": "R", "name": "Hostile Takeover" }] },
		{ "name": "Renekton", "cc": [{ "key": "W", "name": "Ruthless Predator" }] },
		{ "name": "Rengar", "cc": [{ "key": "E", "name": "Bola Strike" }] },
		{ "name": "Riven", "cc": [{ "key": "Q", "name": "Broken Wings" }, { "key": "W", "name": "Ki Burst" }] },
		{ "name": "Rumble", "cc": [{ "key": "E", "name": "Electro Harpoon" }, { "key": "R", "name": "The Equalizer" }] },
		{ "name": "Ryze", "cc": [{ "key": "W", "name": "Rune Prison" }] },
		{ "name": "Samira", "cc": [{ "key": "P", "name": "Daredevil Impulsive" }] },
		{ "name": "Sejuani", "cc": [{ "key": "Q", "name": "Arctic Assault" }, { "key": "W", "name": "Winter's Wrath" }, { "key": "E", "name": "Permafrost" }, { "key": "R", "name": "Glacial Prison" }] },
		{ "name": "Senna", "cc": [{ "key": "Q", "name": "Piercing Darkness" }, { "key": "W", "name": "Last Embrace" }] },
		{ "name": "Seraphine", "cc": [{ "key": "E", "name": "Beat Drop" }, { "key": "R", "name": "Encore" }] },
		{ "name": "Sett", "cc": [{ "key": "E", "name": "Facebreaker" }, { "key": "R", "name": "The Show Stopper" }] },
		{ "name": "Shaco", "cc": [{ "key": "W", "name": "Jack in the Box" }, { "key": "E", "name": "Two-Shiv Poison" }, { "key": "R", "name": "Hallucinate" }] },
		{ "name": "Shen", "cc": [{ "key": "Q", "name": "Twilight Assault" }, { "key": "E", "name": "Shadow Dash" }] },
		{ "name": "Shyvana", "cc": [{ "key": "R", "name": "Dragon's Descent" }] },
		{ "name": "Singed", "cc": [{ "key": "W", "name": "Mega Adhesive" }, { "key": "E", "name": "Fling" }] },
		{ "name": "Sion", "cc": [{ "key": "Q", "name": "Decimating Smash" }, { "key": "E", "name": "Roar of the Slayer" }, { "key": "R", "name": "Unstoppable Onslaught" }] },
		{ "name": "Sivir", "cc": [] },
		{ "name": "Skarner", "cc": [{ "key": "E", "name": "Fracture" }, { "key": "R", "name": "Impale" }] },
		{ "name": "Sona", "cc": [{ "key": "E", "name": "Song of Celerity" }, { "key": "R", "name": "Crescendo" }] },
		{ "name": "Soraka", "cc": [{ "key": "Q", "name": "Starcall" }, { "key": "E", "name": "Equinox" }] },
		{ "name": "Swain", "cc": [{ "key": "W", "name": "Vision of Empire" }, { "key": "E", "name": "Nevermove" }, { "key": "R", "name": "Demonic Ascension" }] },
		{ "name": "Sylas", "cc": [{ "key": "Q", "name": "Chain Lash" }, { "key": "E", "name": "Abduct" }] },
		{ "name": "Syndra", "cc": [{ "key": "W", "name": "Force of Will" }, { "key": "E", "name": "Scatter the Weak" }] },
		{ "name": "Tahm Kench", "cc": [{ "key": "Q", "name": "Tongue Lash" }, { "key": "W", "name": "Abyssal Dive" }, { "key": "R", "name": "Devour" }] },
		{ "name": "Taliyah", "cc": [{ "key": "Q", "name": "Threaded Volley" }, { "key": "W", "name": "Seismic Shove" }, { "key": "E", "name": "Unraveled Earth" }, { "key": "R", "name": "Weaver's Wall" }] },
		{ "name": "Talon", "cc": [{ "key": "W", "name": "Rake" }] },
		{ "name": "Taric", "cc": [{ "key": "E", "name": "Dazzle" }] },
		{ "name": "Teemo", "cc": [{ "key": "Q", "name": "Blinding Dart" }, { "key": "R", "name": "Noxious Trap" }] },
		{ "name": "Thresh", "cc": [{ "key": "Q", "name": "Death Sentence" }, { "key": "E", "name": "Flay" }, { "key": "R", "name": "The Box" }] },
		{ "name": "Tristana", "cc": [{ "key": "W", "name": "Rocket Jump" }, { "key": "R", "name": "Buster Shot" }] },
		{ "name": "Trundle", "cc": [{ "key": "Q", "name": "Chomp" }, { "key": "E", "name": "Pillar of Ice" }] },
		{ "name": "Tryndamere", "cc": [{ "key": "W", "name": "Mocking Shout" }] },
		{ "name": "Twisted Fate", "cc": [{ "key": "W", "name": "Pick A Card - Red and Gold" }] },
		{ "name": "Twitch", "cc": [{ "key": "W", "name": "Venom Cask" }] },
		{ "name": "Udyr", "cc": [{ "key": "E", "name": "Blazing Stampede" }, { "key": "R", "name": "Wingborne Storm" }] },
		{ "name": "Urgot", "cc": [{ "key": "Q", "name": "Corrosive Charge" }, { "key": "E", "name": "Disdain" }, { "key": "R", "name": "Fear Beyond Death" }] },
		{ "name": "Varus", "cc": [{ "key": "E", "name": "Hail of Arrows" }, { "key": "R", "name": "Chain of Corruption" }] },
		{ "name": "Vayne", "cc": [{ "key": "E", "name": "Condemn" }] },
		{ "name": "Veigar", "cc": [{ "key": "E", "name": "Event Horizon" }] },
		{ "name": "Vel'Koz", "cc": [{ "key": "Q", "name": "Plasma Fission" }, { "key": "E", "name": "Tectonic Disruption" }] },
		{ "name": "Vex", "cc": [{ "key": "P", "name": "Doom 'N Gloom" }, { "key": "E", "name": "Looming Darkness" }] },
		{ "name": "Vi", "cc": [{ "key": "Q", "name": "Vault Breaker" }, { "key": "R", "name": "Cease and Desist" }] },
		{ "name": "Viego", "cc": [{ "key": "W", "name": "Spectral Maw" }, { "key": "R", "name": "Heartbreaker" }] },
		{ "name": "Viktor", "cc": [{ "key": "W", "name": "Gravity Field" }] },
		{ "name": "Vladimir", "cc": [{ "key": "W", "name": "Sanguine Pool" }] },
		{ "name": "Volibear", "cc": [{ "key": "Q", "name": "Thundering Smash" }, { "key": "E", "name": "Sky Splitter" }, { "key": "R", "name": "Stormbringer" }] },
		{ "name": "Warwick", "cc": [{ "key": "E", "name": "Primal Howl" }, { "key": "R", "name": "Infinite Duress" }] },
		{ "name": "Wukong", "cc": [{ "key": "R", "name": "Cyclone" }] },
		{ "name": "Xayah", "cc": [{ "key": "E", "name": "Bladecaller" }] },
		{ "name": "Xerath", "cc": [{ "key": "W", "name": "Eye of Destruction" }, { "key": "E", "name": "Shocking Orb" }] },
		{ "name": "Xin Zhao", "cc": [{ "key": "Q", "name": "Three Talon Strike" }, { "key": "W", "name": "Wind Becomes Lightning" }, { "key": "E", "name": "Audacious Charge" }, { "key": "R", "name": "Crescent Guard" }] },
		{ "name": "Yasuo", "cc": [{ "key": "Q", "name": "Steek Tempest" }, { "key": "R", "name": "Last Breath" }] },
		{ "name": "Yone", "cc": [{ "key": "Q", "name": "Mortal Steel" }, { "key": "R", "name": "Fate Sealed" }] },
		{ "name": "Yorick", "cc": [{ "key": "W", "name": "Dark Procession" }, { "key": "E", "name": "Mourning Mist" }] },
		{ "name": "Yuumi", "cc": [{ "key": "Q", "name": "Prowling Projectile" }, { "key": "R", "name": "Final Chapter" }] },
		{ "name": "Zac", "cc": [{ "key": "Q", "name": "Stretching Strikes" }, { "key": "E", "name": "Elastic Slingshot" }, { "key": "R", "name": "Let's Bounce" }] },
		{ "name": "Zed", "cc": [] },
		{ "name": "Zeri", "cc": [{ "key": "Q", "name": "Burst Fire" }, { "key": "W", "name": "Ultrashock Laser" }] },
		{ "name": "Ziggs", "cc": [{ "key": "W", "name": "Satchel Charge" }, { "key": "E", "name": "Hexplosive Minefield" }] },
		{ "name": "Zilean", "cc": [{ "key": "Q", "name": "Time Bomb" }, { "key": "E", "name": "Time Warp" }] },
		{ "name": "Zoe", "cc": [{ "key": "W", "name": "Spell Thief" }, { "key": "E", "name": "Sleepy Trouble Bubble" }] },
		{ "name": "Zyra", "cc": [{ "key": "E", "name": "Grasping Roots" }, { "key": "R", "name": "Stranglethorns" }] }
	]
};

const abilityChamps = ['Amumu', 'Anivia', 'Ashe', 'Blitzcrank', "Cho'Gath"];
const excepts = [
	{ "type": "list", "champs": ["Ahri", "Amumu", 'Anivia', 'Ashe', 'Blitzcrank', "Cho'Gath"] },
	{
		"type": "url", "champs": [
			{ "name": "Ahri", "urls": [{ "key": "E", "url": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AhriSeduce.png" }] }
		]
	},
	{ "type": "ability", "champs": abilityChamps },
	{
		"type": "name", "champs": [
			{ "name": "Fiddlesticks", "newname": "FiddleSticks" },
			{ "name": "Cho'Gath", "newname": "ChoGath" }
		]
	}
]

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
		for (let i = 0; i < cc.champions.length; i++) {
			const currentChamp = cc.champions[i];

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
					console.log(currentChamp.name);
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
			listOfAbilities[i].addEventListener('click', showAbility);
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