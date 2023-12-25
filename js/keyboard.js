var AUDIO_SYNTH = new AudioSynth();
AUDIO_SYNTH.setVolume(0.5);
var CENTER_OCTAVE = 4; // sets position of middle C, normally the 4th octave

function setupKeyboardHTML() {
	var keyboard = document.getElementById('keyboard');
	var notePhotos = document.getElementById("notePhotos")

	var iWhite = 0;
	var notes = AUDIO_SYNTH._notes; // C, C#, D, D#, E, F, F#, G, G#, A, A#, B

	for (var i = -1; i <= 1; i++) {
		var notePhotoRow = document.createElement("div");
		notePhotoRow.setAttribute("class", "row");

		for (var note in notes) {
			var key = document.createElement('div');
			if (note[1] == '#') {
				key.className = 'black key';
				key.style.width = '30px';
				key.style.height = '120px';
				key.style.left = (40 * (iWhite - 1)) + 25 + 'px';
			} else {
				key.className = 'white key';
				key.style.width = '40px';
				key.style.height = '200px';
				key.style.left = 40 * iWhite + 'px';
				iWhite++;
			}

			var octave = CENTER_OCTAVE + i
			var noteText = note + "," + i
			var keyDisplayText = getKeyDisplayText(noteText);
			var noteDisplayText = note[0] + octave.toString() + note.substr(1)

			var label = document.createElement('div');
			label.className = 'label';

			label.innerHTML = '<b class="keyLabel">' + keyDisplayText + '</b>' + '<br /><br />' + noteDisplayText;
			key.appendChild(label);
			key.setAttribute('id', noteText);
			key.addEventListener("mousedown", function(e) { 
				playNote(e.currentTarget.id);
				currentMouseDownNoteText = e.currentTarget.id;
			});
			keyboard[noteText] = key;
			keyboard.appendChild(key);


			if (note[1] != '#') {
				var notePhoto = document.createElement("div");
				notePhoto.setAttribute("class", "column");
				var img = document.createElement("img");
				img.setAttribute("id", "pic_" + noteText);
				img.style.width = "100%";
				img.style.visibility = "hidden";
				notePhoto.appendChild(img);
				notePhotoRow.appendChild(notePhoto);
			}
		}
		notePhotos.appendChild(notePhotoRow);
	}

	keyboard.style.width = iWhite * 40 + 'px';
}

var keysPressed = [];
var currentMouseDownNoteText;

function setupEventListeners() {
	window.addEventListener("mouseup", function() {
		unplayNote(currentMouseDownNoteText);
	});
	
	var keyToNoteText = getKeyToNoteText();
	window.addEventListener('keydown', function(e) {
		if (e.key.toUpperCase() in keyToNoteText) {
			playNote(keyToNoteText[e.key.toUpperCase()])
		}
	});
	window.addEventListener('keyup', function(e) {
		if (e.key.toUpperCase() in keyToNoteText) {
			unplayNote(keyToNoteText[e.key.toUpperCase()])
		}
	});	

	// Adjust image size dynamically on window resize
	window.addEventListener('resize', adjustImageSize);
	window.addEventListener('resize', adjustContentMaxHeight);

	window.addEventListener("mousedown", function() {
		closeNav();
	});
}

function adjustImageSize() {
	var windowHeight = window.innerHeight;
	var topRowHeight = document.getElementById("topRow").offsetHeight;
	var contentTextHeight = document.getElementById("contentText").offsetHeight;
	var keyboardHeight = document.getElementById("keyboard").offsetHeight;
	var keyboardMargin = 60;
	var additionalSlack = 30;
	var image = document.getElementById("contentImage");

	var remainingHeight = windowHeight - topRowHeight - contentTextHeight - keyboardHeight - keyboardMargin - additionalSlack;

	if (remainingHeight > 0 && image.visibility == "visible") {
		image.style.maxHeight = remainingHeight + 'px';
	}
}

function adjustContentMaxHeight() {
	var windowHeight = window.innerHeight;
	var topRowHeight = document.getElementById("topRow").offsetHeight;
	var keyboardHeight = document.getElementById("keyboard").offsetHeight;
	var keyboardMargin = 60;
	// A little hacky and not sure why but this works much better
	var additionalSlack = -10;

	var remainingHeight = windowHeight - topRowHeight - keyboardHeight - keyboardMargin - additionalSlack;

	var content = document.getElementById('content');
	content.style.maxHeight = remainingHeight + 'px';
}

function playNote(noteText) {
	var keyboard = document.getElementById('keyboard');
	if (keysPressed.indexOf(noteText) != -1) {
		return;
	}

	var note = noteText.split(",")[0];
	var octave = noteText.split(",")[1];
	var naturalNoteText = note[0] + "," + octave;

	var img = document.getElementById("pic_" + naturalNoteText);
	if (img) {
		img.src = notePhotos[Math.floor(Math.random() * notePhotos.length)]
		img.onload = function() {
			img.style.visibility = "visible";
		}
	}

	keysPressed.push(noteText);

	if (keyboard[noteText]) {
		keyboard[noteText].style.backgroundColor = '#1BC0EA';
		keyboard[noteText].style.marginTop = '5px';
		keyboard[noteText].style.boxShadow = 'none';
	}

	audio = playSound(noteText);

	document.getElementById("content").style.display = "none";
	document.getElementById("notePhotos").style.display = "inline";
}

// Remove key bindings once note is done.
function unplayNote(noteText) {
	var keyboard = document.getElementById('keyboard');
	var index = keysPressed.indexOf(noteText);
	if (index == -1) {
		return;
	}

	var note = noteText.split(",")[0];
	var octave = noteText.split(",")[1];
	var naturalNoteText = note[0] + "," + octave;

	var img = document.getElementById("pic_" + naturalNoteText);
	if (img) {
		img.style.visibility = "hidden";
	}

	if (keyboard[noteText]) {
		keyboard[noteText].style.backgroundColor = '';
		keyboard[noteText].style.marginTop = '';
		keyboard[noteText].style.boxShadow = '';
	}
	// remove element
	keysPressed.splice(index, 1);

	if (keysPressed.length == 0 && !keyboard.classList.contains("playing")) {
		document.getElementById("content").style.display = "flex";
		document.getElementById("notePhotos").style.display = "none";
		adjustContentMaxHeight();
		adjustImageSize();
	}
}

// Generates audio for pressed note and returns that to be played
function playSound(noteText) {
	var arrPlayNote = noteText.split(',');
	var note = arrPlayNote[0];
	var octave = CENTER_OCTAVE + (arrPlayNote[1]|0);

	src = AUDIO_SYNTH.generate("piano", note, octave, 2);
	container = new Audio(src);
	container.addEventListener('ended', function() { container = null; });
	container.addEventListener('loadeddata', function(e) { e.target.play(); });
	container.autoplay = false;
	container.setAttribute('type', 'audio/wav');
	container.load();
	return container;

};



