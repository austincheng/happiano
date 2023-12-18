import os

note_photos_js = open("globals/notePhotos.js", "w+")

note_photos_js.write("var notePhotos = [\n")

note_photos = os.listdir("note_photos")
for i in range(len(note_photos)):
	file = "note_photos/" + note_photos[i]
	note_photos_js.write("\t\"" + file + "\"")
	if i < len(note_photos) - 1:
		note_photos_js.write(",")
	note_photos_js.write("\n")

note_photos_js.write("];")
