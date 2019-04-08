//GLOBAL FORMATED DATE
var dateText = getFormattedDate(new Date());
	
//GLOBAL WORD ARRAYS
var badWords = [];
var safeWords = [];
getWords();

	
//METHOD TO POPULATE WORD ARRAYS
function getWords() {
	['faggot', 'fag', 'nigger', 'nigga', 'cunt', 'kike', 'retard',
	'dipshit', 'tranny', 'degenerate', 'shithead', 'asshole',
	'towelhead', 'bitch', 'motherfucker'].forEach(function(word){
		
		$.get('http://slurmachine.fun/encode/'+word+'?date='+dateText, function(result) {
			badWords.push(word);
			safeWords.push(result.word);
		});
	});
}

//METHOD TO GET DATE AND FORMAT MM dd yy
function getFormattedDate(date) {
	//get two digit year (yy)
	var year = date.getFullYear().toString().substr(-2);
	
	//get month and pad with 0 if needed (MM)
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	
	//get day (dd)
	var day = date.getDate().toString();
  
	//return result formated MM dd yy
	return month + ' ' + day + ' ' + year;

}


//METHOD TO ENCODE "NAUGHTY WORDS"
function encode(encodeString) {
	return parseEncode(encodeString);
}

//METHOD TO DECODE "NAUGHTY WORDS"
function decode(decodeString) {
	return parseDecode(decodeString)
}

//METHOD TO PARSE STRING AND MAKE BAD WORKS SAFE
function parseEncode(encodeString) {

	//String to search for terms in
	var inputString = encodeString;
	//String for output from replace method
	var outputString;
	//RegExp search term 'bad word'
	var searchTerm;
	//Loop through all array indexes and replace words if found
	for (i = 0; i < badWords.length; i++){
		searchTerm = new RegExp('\\b' + badWords[i] + '\\b', 'gi');
		outputString = inputString.replace(searchTerm, safeWords[i]);
		inputString = outputString;
	}
	//Return the encoded string
	return outputString;
}
//METHOD TO PARSE STRING AND MAKE SAFE WORDS BAD
function parseDecode(decodeString) {
	//String to search for terms in
	var inputString = decodeString;
	//String for output from replace method
	var outputString;
	//RegExp serach term 'safe words'
	var searchTerm;
	//Loop throught all array indexes and replace words if found
	for (i=0;i<badWords.length;i++){
		searchTerm = new RegExp('\\b'+safeWords[i]+'\\b', 'gi');
		outputString = inputString.replace(searchTerm, badWords[i]);
		inputString = outputString;
	}
	//Return the decoded string
	return outputString;
}

//METHOD TO COPY STRING TO CLIPBOARD
function copyStringToClipboard (copyString) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = copyString;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}
