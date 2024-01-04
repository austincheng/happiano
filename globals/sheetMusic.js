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

	play(time, bpm, nextChordNoteTexts, callback) {
		// NO-OP
	}

	getLength(bpm) {
		var quarterNoteDuration = (60 / bpm) * 1000;
		return quarterNoteDuration * (this.noteLengthType / 0.25)
	}
}

class Song {
	constructor(chords, bpm) {
		this.chords = chords;
		this.bpm = bpm;
	}

	play() {
		if (document.getElementById("keyboard").classList.contains("playing")) {
			return;
		}
		document.getElementById("keyboard").classList.add("playing");
		var time = 1000;
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

function eleven() {
	return new Song(
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
		[
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),		
			new Chord(["G#,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/4)
		],
		120
	)
}

function allAmericanHometownBand() {
	return new Song(
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

function elopingToTheMoon() {
	return new Song(
		[
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["G,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["D,1"], 1/4),	
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["G,0"], 1/4),
			new Rest(1/8),	
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["G,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["G,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["D,1"], 1/4),	
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["G,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Rest(1/8),	
			new Chord(["A,1"], 1/8),
			new Chord(["B,1"], 1/8),
			new Chord(["A,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["G,1"], 5/16),
			new Rest(1/8),
			new Chord(["A,1"], 1/8),
			new Chord(["B,1"], 1/8),
			new Chord(["A,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["G,1"], 5/16),
			new Chord(["A,1"], 1/4),
			new Chord(["G,1"], 1/2)
		],
		92
	)
}

function niBeiXieZaiWoDeGeLi() {
	return new Song(
		[
			new Chord(["F,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),	
			new Chord(["C#,1"], 1/8),
			new Chord(["D#,1"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["G,0", "A#,0"], 1/4),
			new Chord(["A#,0", "C#,0"], 1/4),
			new Chord(["F,0", "G#,0"], 1/4),
			new Chord(["G#,0", "C#,1"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0", "D#,1"], 1/8),
			new Chord(["G#,0", "A#,0", "D#,1"], 1/4),
			new Chord(["C,1", "D#,1"], 1/4),
			new Chord(["G#,0", "G#,1"], 1/4),
			new Chord(["C#,1", "C#,2"], 1/4),
			new Chord(["C,1", "C,2"], 1/8),
			new Chord(["C#,1", "C#,2"], 1/8),
			new Chord(["D#,1", "D#,2"], 1/4),
			new Chord(["F,1", "C#,2", "F,2"], 1/2),
			new Chord(["D#,1", "D#,2"], 1/8),
			new Chord(["C#,1", "C#,2"], 1/8),
			new Chord(["C,1", "C,2"], 1/4),
			new Chord(["A#,0", "A#,1"], 1/4),
			new Chord(["C#,1", "C#,2"], 1/4),
			new Chord(["G#,0", "G#,1"], 1/4),
			new Chord(["C#,1", "C#,2"], 1/4),
			new Chord(["E,0", "E,1"], 1/8),
			new Chord(["G#,0", "G#,1"], 1/8),
			new Chord(["C#,1", "C#,2"], 1/8),
			new Chord(["E,1", "E,2"], 1/8),
			new Chord(["D#,1", "D#,2"], 1/2),
			new Chord(["D#,1", "C,2", "D#,2"], 1/2),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32),
			new Chord(["C,1"], 1/32),
			new Chord(["C#,1"], 1/32)
			
			
		],
		92
	)	
}

function dontYouKnowYet() {
	return new Song(
		[
			new Chord(["F,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["A,0"], 1/2),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/16),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["A,0"], 1/4),
			new Rest(1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 1/16),
			new Chord(["A#,0"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["D,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["F,0"], 1/4),
			new Rest(1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["A,0"], 1/4),
			new Rest(1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/4),
			new Rest(1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["A,0"], 1/4)
		],
		100
	)	
}

function whyNotLove() {
	return new Song(
		[
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["B,0"], 1/16),
			new Chord(["D,1"], 1/8),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/16),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["E,0"], 1/16),
			new Chord(["F#,0"], 1/8),
			new Chord(["E,0"], 1/16),
			new Chord(["F#,0"], 1/8),
			new Chord(["E,0"], 1/16),
			new Chord(["F#,0"], 3/16),
			new Chord(["B,0"], 3/16),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/4),
			new Chord(["B,0"], 3/8),
			new Rest(1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["D,1"], 1/8),
			new Chord(["G,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 3/16),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/16),
			new Chord(["B,0"], 1/8)	
		],
		80
	)
}

function dimples() {
	return new Song(
		[
			new Chord(["E,0"], 3/8),
			new Chord(["E,0"], 1/8),
			new Chord(["F,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["D,0"], 3/8),
			new Chord(["D,0"], 1/8),
			new Chord(["G,0"], 1/4),
			new Chord(["D,0"], 1/4),
			new Chord(["C,0"], 3/8),
			new Chord(["C,0"], 1/8),
			new Chord(["A,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["E,0"], 1/2),
			new Chord(["D,0"], 1/2),
			new Chord(["E,0"], 3/8),
			new Chord(["E,0"], 1/8),
			new Chord(["F,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["G,0"], 3/8),
			new Chord(["G,0"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/2),
			new Chord(["C,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 3/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/2)			
		],
		120
	)
}

function lianXiAiQing() {
	return new Song(
		[
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Rest(3/4),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(1),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(1/2),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(3/4),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Rest(1),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["G,0"], 1/4),
			new Chord(["E,0"], 1/16),
			new Chord(["D,0"], 3/16),
			new Chord(["D,0"], 3/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["F,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Rest(3/4),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(1),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(1/2),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Rest(3/4),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8)
		],
		110
	)
}

function youDianTian() {
	return new Song(
		[
			new Chord(["E,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["B,0"], 1/4),
			new Rest(1/4),
			new Chord(["G#,0"], 1/16),
			new Chord(["B,0"], 1/16),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["E,0", "C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["F#,0", "B,0"], 1/8),
			new Chord(["B,0"], 5/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["D#,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["D#,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D#,1"], 1/4),
			new Chord(["E,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["B,0"], 1/4),
			new Rest(1/4),
			new Chord(["G#,0"], 1/16),
			new Chord(["B,0"], 1/16),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["C#,1"], 1/8),
			new Chord(["E,0", "C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,0", "B,0"], 1/8),
			new Chord(["B,0"], 5/8)
		],
		105
	)
}

function iWillBeByYourSide() {
	return new Song(
		[
			new Chord(["D,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/2),
			new Rest(1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 3/16),
			new Chord(["B,0"], 1/2),
			new Rest(1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/16),
			new Chord(["D,1"], 3/16),
			new Chord(["B,0"], 3/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 3/16),
			new Chord(["G,0"], 1/2),
			new Rest(1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["D,1"], 1/16),
			new Chord(["B,0"], 1/4),
			new Chord(["A,0"], 5/16),
			new Chord(["D,0"], 1/16),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/16),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 3/16),
			new Chord(["G,0"], 1/2)			
		],
		84
	)
}

function messedUp() {
	return new Song(
		[
			new Chord(["C,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/16),
			new Chord(["F,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/16),
			new Chord(["F,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,1"], 1/8),
			new Chord(["A,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 7/8),
			new Chord(["C,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/16),
			new Chord(["F,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/16),
			new Chord(["D,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/16),
			new Chord(["F,1"], 1/16),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Chord(["F,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["C,1"], 7/8),
			new Rest(1/4),
			new Chord(["C,2"], 1/16),
			new Chord(["C,2"], 3/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["G,1"], 1/16),
			new Chord(["F,1"], 3/16),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["C,2"], 1/16),
			new Chord(["C,2"], 3/16),
			new Chord(["E,1"], 1/16),
			new Chord(["E,1"], 3/16),
			new Chord(["G,1"], 1/2)	
		],
		86
	)
}

function zhiShanShanLaiChiDeNi() {
	return new Song(
		[
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["F,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Rest(3/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,1"], 3/8),
			new Chord(["G,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["A,1"], 1/4),
			new Chord(["E,1"], 1/8),
			new Chord(["G,1"], 1)
		],
		96
	)
}

function loveDoesntNeedToPretend() {
	return new Song(
		[
			new Chord(["F,-1"], 1/8),
			new Chord(["G#,-1"], 1/8),
			new Chord(["F,-1"], 1/4),
			new Rest(1/2),
			new Chord(["C,0"], 1/8),
			new Chord(["G#,-1"], 1/8),
			new Chord(["F,-1"], 1/4),
			new Rest(1/2),
			new Chord(["F,-1"], 1/8),
			new Chord(["G#,-1"], 1/8),
			new Chord(["F,-1"], 1/4),
			new Rest(1/2),
			new Chord(["C,0"], 1/8),
			new Chord(["G#,-1"], 1/8),
			new Chord(["F,-1"], 1/4),
			new Rest(1/2),
			new Chord(["F,0", "F,1"], 1/8),
			new Chord(["G#,0", "G#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/4),
			new Rest(1/2),
			new Chord(["C,1", "C,2"], 1/8),
			new Chord(["G#,0", "G#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/4),
			new Rest(1/2),
			new Chord(["F,0", "F,1"], 1/8),
			new Chord(["G#,0", "G#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/4),
			new Rest(1/2),
			new Chord(["C,1", "C,2"], 1/8),
			new Chord(["G#,0", "G#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/4)
			/*new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/4),


			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["C,1"], 1/4),




			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/4),





			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["G,0"], 1/2),



			new Chord(["F#,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/4),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["D,0"], 1/4)*/

		],
		76// * 2
	)
}

function aiDeZhuXuanLu() {
	return new Song(
		[
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/2),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G#,0"], 3/8),
			new Chord(["E,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["C,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/2),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["B,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["B,0"], 1/16),
			new Chord(["C,1"], 1/16),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["A,0"], 3/4),
			new Rest(1/8),
			new Chord(["G,0"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["F,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["G,1"], 1/4),
			new Chord(["D,1"], 1/4)
		],
		80
	)
}

function liangShanBoYuZhuLiYe() {
	return new Song(
		[
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/2),
			new Rest(1/4),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["F#,1"], 3/8),
			new Rest(1/8),
			new Chord(["D,1"], 3/8),
			new Rest(1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["D,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["C#,1"], 1/8),
			new Chord(["B,0"], 1/8),
			new Chord(["A,0"], 1/2),
			new Rest(1/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,1"], 3/8),
			new Chord(["G,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Chord(["F#,1"], 1/8),
			new Chord(["E,1"], 1/8),
			new Chord(["E,1"], 1/4),
			new Chord(["D,1"], 5/8)
			
		],
		120
	)
}

function nianNian() {
	return new Song(
		[
			new Chord(["D,0"], 1/2),
			new Chord(["D,0"], 1/4),
			new Chord(["G,0"], 3/4),
			new Chord(["D,0"], 1/2),
			new Chord(["D,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Chord(["D,0"], 1/2),
			new Chord(["C,0"], 1/2),
			new Chord(["C,0"], 1/4),
			new Chord(["G,0"], 3/4),
			new Chord(["D,0"], 1/4),
			new Chord(["C,0"], 1/4),
			new Chord(["F,0"], 1/4),
			new Chord(["E,0"], 3/4),
			new Chord(["E,0"], 3/4),
			new Chord(["G,0"], 1/4),
			new Chord(["C,0"], 1/4),
			new Chord(["C,0"], 1/4),
			new Chord(["D,0"], 3/4),
			new Chord(["C,0"], 1/4),
			new Chord(["D,0"], 1/4),
			new Chord(["E,0"], 1/4),
			new Chord(["F,0"], 3/4),
			new Chord(["G,0"], 3/16),
			new Chord(["F,0"], 1/16),
			new Chord(["E,0"], 1/2),
			new Chord(["A,-1"], 1/2),
			new Chord(["C,0"], 1/4),
			new Chord(["C,0"], 3/8),
			new Chord(["D,0"], 1/16),
			new Chord(["C,0"], 1/16),
			new Chord(["B,-1"], 3/4),
			new Chord(["G,0"], 1/2),
			new Chord(["C,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["E,1"], 1/2),
			new Chord(["G,0"], 1/2),
			new Chord(["C,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["B,0"], 1/2),
			new Chord(["C,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["B,0"], 1/4),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 3/4),
			new Rest(1/2),
			new Chord(["G,0"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["D,1"], 1/2),
			new Chord(["G,0"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["C,1"], 1/2),
			new Chord(["F,1"], 1/4),
			new Chord(["E,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["D,1"], 1/4),
			new Chord(["E,1"], 1/4),	
			new Chord(["E,1"], 1/8),	
			new Chord(["D,1"], 5/8)	
		],
		120
	)
}

function shaXiao() {
	return new Song(
		[
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["F,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["F,1"], 1/4),
			new Chord(["G,1"], 1/4),
			new Chord(["F,1"], 1/4),
			new Chord(["G,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G,1"], 1/4),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["G#,0", "F,1"], 1/8),
			new Chord(["A#,0", "G,1"], 1/8),
			new Chord(["G,0", "D#,1"], 1/8),
			new Chord(["G#,0", "F,1"], 1/4),
			new Chord(["A#,0", "G,1"], 1/4),
			new Chord(["G#,0", "F,1"], 1/4),
			new Chord(["A#,0", "G,1"], 1/8),
			new Chord(["C,1", "G#,1"], 1/8),
			new Chord(["A#,0", "G,1"], 1/4),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),						
			new Chord(["G,1", "D#,2"], 1/4),
			new Chord(["F,1", "D,2"], 1/8),
			new Chord(["D#,1", "C,2"], 1/4),
			new Chord(["F,1", "D,2"], 1/8),
			new Chord(["D#,1", "G,1"], 1/8),
			new Chord(["D#,1", "C,2"], 1/8),
			new Chord(["D,1", "A#,1"], 1/2),
			new Rest(1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["G,1", "A#,1"], 1/4),
			new Chord(["G#,1", "C,2"], 1/8),
			new Chord(["G,1", "A#,1"], 1/8),
			new Rest(1/8),
			new Chord(["D#,0", "D#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/8),
			new Rest(1/4),
			new Chord(["D#,1", "G,1"], 1/8),
			new Chord(["D,1", "F,1"], 1/8),
			new Rest(1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["F,1"], 1/8),
			new Chord(["G,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["F,1"], 1/4),
			new Chord(["G,1"], 1/4),
			new Chord(["F,1"], 1/4),
			new Chord(["G,1"], 1/8),
			new Chord(["G#,1"], 1/8),
			new Chord(["G,1"], 1/4),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["A#,0"], 1/8),
			new Chord(["G#,0", "F,1"], 1/8),
			new Chord(["A#,0", "G,1"], 1/8),
			new Chord(["G,0", "D#,1"], 1/8),
			new Chord(["G#,0", "F,1"], 1/4),
			new Chord(["A#,0", "G,1"], 1/4),
			new Chord(["G#,0", "F,1"], 1/4),
			new Chord(["A#,0", "G,1"], 1/8),
			new Chord(["C,1", "G#,1"], 1/8),
			new Chord(["A#,0", "G,1"], 1/4),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),						
			new Chord(["G,1", "D#,2"], 1/4),
			new Chord(["F,1", "D,2"], 1/8),
			new Chord(["D#,1", "C,2"], 1/4),
			new Chord(["A#,1", "F,2"], 1/4),
			new Chord(["D#,1", "D,2"], 1/16),
			new Chord(["C,2"], 1/16),
			new Chord(["D,1", "A#,1"], 5/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["D#,1"], 1/8),
			new Chord(["G,1", "A#,1"], 1/4),
			new Chord(["G#,1", "C,2"], 1/8),
			new Chord(["G,1", "A#,1"], 1/8),
			new Rest(1/8),
			new Chord(["D#,0", "D#,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/8),
			new Chord(["F,0", "F,1"], 1/8)
		],
		98
	)
}

function rewriteTheStars() {
	return new Song(
		[
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/4),
			new Chord(["F#,0", "D,1"], 3/8),
			new Chord(["C#,1"], 3/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 5/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["D,0"], 1/8),
			new Chord(["F#,0", "B,0"], 1/2),	
			new Chord(["A,0"], 3/8),
			new Chord(["D,0"], 1/8),	
			new Chord(["C#,0", "E,0"], 5/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/4),
			new Chord(["F#,0", "D,1"], 3/8),
			new Chord(["C#,1"], 3/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 5/8),
			new Rest(1/4),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["D,0"], 1/8),
			new Chord(["F#,0", "B,0"], 1/4),	
			new Chord(["D,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["F#,0", "B,0"], 3/8),
			new Chord(["D,0"], 1/4),
			new Chord(["C#,0", "E,0"], 5/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["F#,0"], 1/8),
			new Chord(["D,0", "F#,0"], 3/8),
			new Rest(1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["F#,0"], 1/8),
			new Chord(["D,0", "F#,0"], 5/8),	
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["D,0"], 1/8),
			new Chord(["F#,0", "B,0"], 3/8),
			new Chord(["A,0"], 1/4),
			new Chord(["A,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["F#,0"], 1/8),
			new Chord(["C#,0", "E,0"], 1/2),	
			new Chord(["D,0"], 1/8),		
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),
			new Chord(["D,0"], 1/4),
			new Chord(["F#,0", "D,1"], 3/8),
			new Chord(["C#,1"], 3/8),
			new Chord(["A,0"], 1/8),
			new Chord(["G,0"], 5/8),
			new Chord(["D,0"], 1/8),
			new Chord(["E,0"], 1/8),	
			new Chord(["D,0"], 1/8),
			new Chord(["F#,0", "A,0"], 1/2),	
			new Chord(["G,0"], 3/8),
			new Chord(["F#,0"], 1/4),
			new Chord(["E,0"], 5/8),
			new Rest(1/4),
			new Chord(["D,0"], 1/8),
			new Chord(["D,0"], 1/4)
		],
		120
	)
}

function imAlive() {
	return new Song(
		[
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["A#,0"], 1/4),
			new Chord(["G,0"], 1/4),
			new Rest(1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["A#,0"], 1/4),
			new Chord(["G,0"], 1/2),
			new Chord(["C,1"], 1/8),
			new Chord(["A#,0"], 1/8),	
			new Chord(["G#,0"], 1/8),
			new Chord(["A#,0"], 1/8),	
			new Chord(["F,0"], 1/4),
			new Chord(["D#,1"], 1/4),
			new Chord(["D#,1"], 1/4),
			new Chord(["C,1"], 1/8),				
			new Chord(["C#,1"], 1/4),			
			new Chord(["C,1"], 1/4),	
			new Chord(["C,1"], 1/8),	
			new Chord(["A#,0"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["D#,1"], 1/4),
			new Chord(["D#,1"], 1/4),
			new Chord(["C,1"], 1/4),				
			new Chord(["A#,0"], 1/2),	
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/8),
			new Rest(1/4),
			new Chord(["G#,0"], 1/8),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/8),
			new Chord(["C,1"], 1/16),
			new Chord(["A#,0"], 1/8),
			new Rest(1/2),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/2),
			new Chord(["F,1"], 1/2),
			new Chord(["D#,1"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["C#,1"], 1/8),
			new Chord(["C,1"], 1/2),
			new Chord(["A#,0"], 1/2),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["F,0"], 1/2),
			new Chord(["F,1"], 1/2),
			new Chord(["D#,1"], 1/4),
			new Chord(["C#,1"], 1/4),
			new Chord(["C,1"], 1/4),
			new Chord(["C#,1"], 1/8),
			new Chord(["C,1"], 1/2),
			new Chord(["A#,0"], 1/2),
			new Chord(["G#,0"], 1/8),
			new Chord(["G#,0"], 1/4),
			new Chord(["G,0"], 1/8),
			new Chord(["G,0"], 1/16),
			new Chord(["F,0"], 1/2)
		],
		120
	)
}

function happyBirthday() {
	return new Song(
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







