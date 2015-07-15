var merge = require("broccoli-merge-trees");
var sass = require("broccoli-sass");

var includePaths = [
	'assets/styles',
	'bower_components/reset-css',
	'bower_components/bourbon/app/assets/stylesheets'
];


var compiledCss= sass(includePaths, 'app.scss', 'app.css');
module.exports = merge(['public', 'assets/scripts', compiledCss]);
