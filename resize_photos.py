import os
from PIL import Image, ExifTags
from tqdm import tqdm

def resize_image(original_path, new_path, size):
	image = Image.open(original_path)
	exif = dict(image._getexif().items())
	if ExifTags.Base.Orientation.value in exif:
		if exif[ExifTags.Base.Orientation.value] == 3: 
			image = image.rotate(180, expand=True)
		elif exif[ExifTags.Base.Orientation.value] == 6: 
			image = image.rotate(270, expand=True)
		elif exif[ExifTags.Base.Orientation.value] == 8: 
			image = image.rotate(90, expand=True)

	image.thumbnail((size, size), Image.ANTIALIAS)

	if not os.path.exists(new_path):
		image.save(new_path)

if not os.path.exists("collage_photos"):
	os.mkdir("collage_photos")

if not os.path.exists("note_photos"):
	os.mkdir("note_photos")

for photo in tqdm(os.listdir("original_collage_photos")):
	original_path = os.path.join("original_collage_photos", photo)
	new_path = os.path.join("collage_photos", photo)
	resize_image(original_path, new_path, 1300)

for photo in tqdm(os.listdir("original_note_photos")):
	original_path = os.path.join("original_note_photos", photo)
	new_path = os.path.join("note_photos", photo)
	resize_image(original_path, new_path, 700)

