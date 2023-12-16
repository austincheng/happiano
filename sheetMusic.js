class Chord {
	constructor(noteTexts, noteLengthType) {
		this.noteTexts = noteTexts;
		this.noteLengthType = noteLengthType;
	}

	play(time, bpm, nextChordNoteTexts) {
		var chordLength = this.getLength(bpm);
		for (var noteText of this.noteTexts) {
			var length;
			if (nextChordNoteTexts.indexOf(noteText) != -1) {
				length = chordLength - 50;
			} else {
				length = chordLength;
			}
		    setTimeout(function() {
		        playNote(noteText)
		    }, time);
		    setTimeout(function() {
		        unplayNote(noteText)
		    }, time + length);
		    console.log(length)
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
	constructor(name, chords) {
		this.name = name;
		this.chords = chords;
	}

	play(bpm) {
		var time = 0;
		for (var i = 0; i < this.chords.length; i++) {
			var chord = this.chords[i]
			var nextChordNoteTexts = []
			if (i < this.chords.length - 1) {
				nextChordNoteTexts = this.chords[i + 1].noteTexts;
			}

			chord.play(time, bpm, nextChordNoteTexts);
			time += chord.getLength(bpm);
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
		]
	)
}

function eleven() {
	return new Song(
		"Eleven",
		[]
	)
}

function turkishMarch() {
	return new Song(
		"Turkish March",
		[]
	)
}

function allAmericanHometownBand() {
	return new Song(
		"All American Hometown Band",
		[]
	)	
}