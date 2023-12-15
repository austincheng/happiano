function getKeyToNoteText() {
	return {
		"Q": 'C,-1',
		"2": 'C#,-1',
		"E": 'D,-1',
		"4": 'D#,-1',
		"T": 'E,-1',
		"Y": 'F,-1',
		"7": 'F#,-1',
		"I": 'G,-1',
		"9": 'G#,-1',
		"P": 'A,-1',
		"-": 'A#,-1',
		"]": 'B,-1',

		"A": 'C,0',
		"W": 'C#,0',
		"D": 'D,0',
		"R": 'D#,0',
		"G": 'E,0',
		"H": 'F,0',
		"U": 'F#,0',
		"K": 'G,0',
		"O": 'G#,0',
		";": 'A,0',
		"[": 'A#,0',
		"'": 'B,0',

		"Z": 'C,1',
		"S": 'C#,1',
		"C": 'D,1',
		"F": 'D#,1',
		"B": 'E,1',
		"N": 'F,1',
		"J": 'F#,1',
		",": 'G,1',
		"L": 'G#,1',
		".": 'A,1',
		"ARROWLEFT": 'A#,1',
		"/": 'B,1',
	};
}

var noteTextToKey = {}
function getKeyDisplayText(noteText) {
	if (noteText in noteTextToKey) {
		return noteTextToKey[noteText];
	}

	var keyToNoteText = getKeyToNoteText();

	for (var key in keyToNoteText) {
		var queriedNoteText = keyToNoteText[key];
		if (key == "ARROWLEFT") {
			noteTextToKey[queriedNoteText] = "<-";
		} else {
			noteTextToKey[queriedNoteText] = key;
		}
		if (queriedNoteText == noteText) {
			return noteTextToKey[queriedNoteText]
		}
	}
	
	return -1;
}





