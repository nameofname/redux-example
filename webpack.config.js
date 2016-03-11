"use strict"; 

var webpack = require("webpack");
var path = require("path");

module.exports = {
	context: __dirname,
	entry: "./public/js/theFile.js",
	output: {
        path: "./public/compiled/",
        filename: "theFile-compiled.js"
	},
	recordsOutputPath: path.join(__dirname, "/public/compiled/records.json"),
	//module: {
     //   loaders: [
     //       {
     //           test: /\.js?$/,
     //           exclude: /(node_modules)/,
     //           loader: 'babel',
     //           query: {
     //               presets: ['es2015', 'stage-2']
     //           }
     //       }
     //   ]
	//},
	fakeUpdateVersion: 0
};
//function escapeRegExpString(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
//function pathToRegExp(p) { return new RegExp("^" + escapeRegExpString(p)); }
