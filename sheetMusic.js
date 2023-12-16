class Chord {
	constructor(noteTexts, noteLengthType) {
		this.noteTexts = noteTexts;
		this.noteLengthType = noteLengthType;
	}

	play(time, bpm, nextChordNoteTexts, callback) {
		var chordLength = this.getLength(bpm);
		for (var i in this.noteTexts) {
			var noteText = this.noteTexts[i]
			var length;
			if (nextChordNoteTexts.indexOf(noteText) != -1) {
				length = chordLength - 50;
			} else {
				length = chordLength;
			}
		    setTimeout(() => {
		        playNote(noteText);
		    }, time);
		    setTimeout(() => {
		        if (i == this.noteTexts.length - 1) {
			        callback();
			    }
		        unplayNote(noteText);
		    }, time + length);
		}		
	}

	getLength(bpm) {
		var quarterNoteDuration = (60 / bpm) * 1000;
		return quarterNoteDuration * (this.noteLengthType / 0.25)
	}
}

class Rest {
	constructor(noteLengthType) {
		this.noteTexts = [];
		this.noteLengthType = noteLengthType;
	}

	play(time, bpm, nextChordNoteTexts) {
		// NO-OP
	}

	getLength(bpm) {
		var quarterNoteDuration = (60 / bpm) * 1000;
		return quarterNoteDuration * (this.noteLengthType / 0.25)
	}
}

class Song {
	constructor(name, chords, bpm) {
		this.name = name;
		this.chords = chords;
		this.bpm = bpm;
	}

	play() {
		if (document.getElementById("keyboard").classList.contains("playing")) {
			return;
		}
		document.getElementById("keyboard").classList.add("playing");
		var time = 0;
		for (var i = 0; i < this.chords.length; i++) {
			var chord = this.chords[i]
			var nextChordNoteTexts = []
			if (i < this.chords.length - 1) {
				nextChordNoteTexts = this.chords[i + 1].noteTexts;
			}

			var finalChordCallback;
			if (i == this.chords.length - 1) {
				finalChordCallback = function() {
					document.getElementById("keyboard").classList.remove("playing");
				}
			} else {
				finalChordCallback = function() {};
			}
			chord.play(time, this.bpm, nextChordNoteTexts, finalChordCallback);
			time += chord.getLength(this.bpm);
		}
	}
}

function happyBirthday() {
	return new Song(
		"Happy Birthday!",
		[
			new Chord(["G,0"], 1/8),
	        new Chord(["G,0"], 1/8),
	        new Chord(["A,0"], 1/4),
	        new Chord(["G,0"], 1/4),
	        new Chord(["C,1"], 1/4),
	        new Chord(["B,0"], 1/2),
	        new Chord(["G,0"], 1/8),
	        new Chord(["G,0"], 1/8),
	        new Chord(["A,0"], 1/4),
	        new Chord(["G,0"], 1/4),
	        new Chord(["D,1"], 1/4),
	        new Chord(["C,1"], 1/2),
	        new Chord(["G,0"], 1/8),
	        new Chord(["G,0"], 1/8),
	        new Chord(["G,1"], 1/4),
	        new Chord(["E,1"], 1/4),
	        new Chord(["C,1"], 1/4),
	        new Chord(["B,0"], 1/4),
	        new Chord(["A,0"], 1/4),
	        new Rest(1/4),
	        new Chord(["F,1"], 1/8),
	        new Chord(["F,1"], 1/8),
	        new Chord(["E,1"], 1/4),
	        new Chord(["C,1"], 1/4),
	        new Chord(["D,1"], 1/4),
	        new Chord(["C,1"], 1/2)
		],
		120
	)
}

function eleven() {
	return new Song(
		"Eleven",
		[
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8)
		],
		120
	)
}

function turkishMarch() {
	return new Song(
		"Turkish March",
		[
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8)
		],
		120
	)
}

function allAmericanHometownBand() {
	return new Song(
		"All American Hometown Band",
		[
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8)
			
		],
		120
	)	
}