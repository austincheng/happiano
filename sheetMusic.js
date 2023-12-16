class Chord {
	constructor(noteTexts, noteLengthType) {
		this.noteTexts = noteTexts;
		this.noteLengthType = noteLengthType;
	}

	play(time, bpm, nextChordNoteTexts, callback) {
		var chordLength = this.getLength(bpm);
		var length = chordLength;
		for (var noteText of this.noteTexts) {
			if (nextChordNoteTexts.indexOf(noteText) != -1) {
				length = chordLength - 50;
				break;
			}
		}
	    setTimeout(() => {
	    	for (var noteText of this.noteTexts) {
		        playNote(noteText);
		    }
	    }, time);
	    setTimeout(() => {
		    for (var i in this.noteTexts) {
		    	var noteText = this.noteTexts[i];
		    	if (i == this.noteTexts.length - 1) {
			        callback();
			    }
		        unplayNote(noteText);
		    }
	    }, time + length);
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
			new Chord(["G#,0"], 1/4),
			new Chord(["G#,0"], 1/4),
			new Chord(["F#,0"], 1/4),
			new Chord(["G#,0"], 1/8),
			new Rest(1/8),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/8),
			new Rest(1/8),
			new Chord(["G,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["F#,0"], 1/4),
			new Chord(["F#,0"], 1/8),
			new Rest(1/8),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["G#,0"], 1/8),
			new Rest(1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["G#,0"], 1/4),
			new Chord(["F#,0"], 1/4),
			new Chord(["F#,0"], 1/8),
			new Rest(1/8),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["F#,0"], 3/16),
			new Chord(["E,0"], 1/16),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,-1"], 1/2),
			new Rest(1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["E,0"], 3/16),
			new Chord(["F#,0"], 1/16),
			new Chord(["E,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G,0"], 3/16),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["B,0"], 1/2),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["C,1"], 3/16),
			new Chord(["C,1"], 1/16),
			new Chord(["C,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["A,0"], 3/16),
			new Chord(["A,0"], 1/16),
			new Chord(["A,0"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["B,0"], 1/2),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["E,0"], 3/16),
			new Chord(["F#,0"], 1/16),
			new Chord(["E,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G,0"], 3/16),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["B,0"], 1/2),
			new Rest(1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["B,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,1"], 1/4),
			new Rest(1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,0"], 3/8),
			new Chord(["E,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,0"], 1/4),	
			new Chord(["E,0"], 1/8),	
			new Chord(["E,0"], 1/8),	
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["E,1"], 1/16),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Rest(1/4),
			new Chord(["B,0"], 1/12),
			new Chord(["E,0"], 1/12),
			new Chord(["E,0"], 1/12),
			new Chord(["B,0"], 1/12),
			new Chord(["E,0"], 1/12),
			new Chord(["E,0"], 1/12),
			new Chord(["A,0"], 1/8),
			new Chord(["G#,0"], 1)
		],
		120
	)
}

function turkishMarch() {
	return new Song(
		"Turkish March",
		[
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["C#,0", "C#,1"], 1/4),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["C#,0", "C#,1"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["G#,-1", "G#,0"], 1/8),
			new Chord(["F#,-1", "F#,0"], 1/8),
			new Chord(["G#,-1", "G#,0"], 1/8),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),		
			new Chord(["G#,-1", "G#,0"], 1/8),
			new Chord(["E,-1", "E,0"], 1/8),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["C#,0", "C#,1"], 1/4),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["C#,0", "C#,1"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["A,-1", "A,0"], 1/8),
			new Chord(["G#,-1", "G#,0"], 1/8),
			new Chord(["F#,-1", "F#,0"], 1/8),
			new Chord(["B,-1", "B,0"], 1/8),
			new Chord(["G#,-1", "G#,0"], 1/8),
			new Chord(["E,-1", "E,0"], 1/8),
			new Chord(["A,-1", "A,0"], 1/4)
		],
		120
	)
}

function allAmericanHometownBand() {
	return new Song(
		"All American Hometown Band",
		[
			new Chord(["E,0"], 1/16),
			new Chord(["D#,0"], 1/16),
			new Chord(["E,0"], 1/8),
			new Rest(1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/16),
			new Chord(["D#,0"], 1/16),
			new Chord(["E,0"], 1/8),
			new Rest(1/8),	
			new Chord(["E,0"], 1/8),
			new Chord(["F,0"], 1/16),
			new Chord(["E,0"], 1/16),
			new Chord(["F,0"], 1/8),
			new Rest(1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["F,0"], 1/4),
			new Rest(1/4),
			new Chord(["F,0"], 1/16),
			new Chord(["E,0"], 1/16),
			new Chord(["F,0"], 1/8),
			new Rest(1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["F,0"], 1/16),
			new Chord(["E,0"], 1/16),
			new Chord(["F,0"], 1/8),
			new Rest(1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["G,0"], 1/16),
			new Chord(["F#,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Rest(1/8),	
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/4),	
			new Rest(1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["F,0"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["A,0"], 1/4),	
			new Chord(["G,0"], 3/16),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["E,0"], 1/4)			
		],
		126
	)	
}