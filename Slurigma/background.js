// LISTENER EVENT FOR onClicked CHECK FOR CONTEXT MENU ID
chrome.contextMenus.onClicked.addListener(function(info, tab){
	var returnString;
	switch(info.menuItemId) {
		case info.menuItemId = "encodeMenu":
			returnString = encode(info.selectionText);
			copyStringToClipboard(returnString);
			alert(returnString+'\n\nCopied to clipboard');
			break;
		case info.menuItemId= "decodeMenu":
			returnString = decode(info.selectionText);
			alert(returnString);
			break;
		}
});
				
chrome.contextMenus.create({ //create encode menu
	id: "encodeMenu",
	title: "Encode",
	contexts:["all"]
});

chrome.contextMenus.create({ //create decode menu
	id: "decodeMenu",
	title: "Decode",
	contexts:["all"]
});

