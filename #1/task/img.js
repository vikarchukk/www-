const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify"); 
const imagemin = require("gulp-imagemin");
const size = require("gulp-size");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const img = function() {
	return src(path.img.src)
	.pipe(plumber({
		errorHandler: notify.onError(error => ({
			title: "Image",
			message: error.message
		}))
	}))
	.pipe(newer(path.img.dest))
	.pipe(dest(path.img.dest));
}

module.exports = img;