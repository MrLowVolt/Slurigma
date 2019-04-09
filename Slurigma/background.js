// LISTENER EVENT FOR onClicked CHECK FOR CONTEXT MENU ID
chrome.contextMenus.onClicked.addListener(function(info, tab){
	var returnString;
	switch(info.menuItemId) {
		case info.menuItemId = "encodeMenu":
			if(info.selectionText) {
				returnString = encode(info.selectionText);
				copyStringToClipboard(returnString);
				alert(returnString+'\n\nCopied to clipboard');
			}
			break;
		case info.menuItemId= "decodeMenu":
			if(info.selectionText) {	
				returnString = decode(info.selectionText);
				alert(returnString);
			}
			break;
		}
});
				
//Create Encode menu
chrome.contextMenus.create({
	id: "encodeMenu",
	title: "Encode",
	contexts:["all"]
});

//Create Decode menu
chrome.contextMenus.create({
	id: "decodeMenu",
	title: "Decode",
	contexts:["all"]
});

