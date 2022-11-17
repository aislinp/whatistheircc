//not gonna lie i may remove this... idk it seems to be tracking stuff. CREEPY!
function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{
			pageLanguage: "en",
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		},
		"google_translate_element"
	);
}