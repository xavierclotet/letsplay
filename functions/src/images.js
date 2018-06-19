//const functions = require('firebase-functions');
// https://github.com/mutebg/online-store/blob/master/functions/images.js
const gcs = require('@google-cloud/storage')();
const sharp = require('sharp');
const _ = require('lodash');
const path = require('path');
const os = require('os');

function resizeImage(event) {
	const object = event.data; // The Storage object.

	const fileBucket = object.bucket; // The Storage bucket that contains the file.
	const filePath = object.name; // File path in the bucket.
	const contentType = object.contentType; // File content type.
	const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).

	const SIZES = [300, 600, 900, 1200]; // Resize target width in pixels
	const FORMATS = ['jpg', 'webp']; // Resize target formats
	const PREFIX = '_thumb';
	const FOLDER = 'resized';

	if (!contentType.startsWith('image/') || resourceState === 'not_exists') {
		console.log('This is not an image.');
		return;
	}

	if (_.includes(filePath, PREFIX)) {
		console.log('already processed image');
		return;
	}

	const fileName = filePath.split('/').pop();
	const bucket = gcs.bucket(fileBucket);
	const tempFilePath = path.join(os.tmpdir(), fileName);

	return bucket
		.file(filePath)
		.download({
			destination: tempFilePath
		})
		.then(() => {
			_.each(SIZES, size => {
				_.each(FORMATS, ext => {
					let newFileName = `${fileName}_${size}${PREFIX}.${ext}`;
					let newFileTemp = path.join(os.tmpdir(), newFileName);
					let newFilePath = `${FOLDER}/${newFileName}`;

					sharp(tempFilePath)
						.resize(size, null)
						.toFile(newFileTemp, (err, info) => {
							bucket.upload(newFileTemp, {
								destination: newFilePath
							});
						});
				});
			});
		});
}

exports.resizeImage = resizeImage;
