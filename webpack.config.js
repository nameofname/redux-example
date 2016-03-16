"use strict"; 

//var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, './public/js/theFile.js'),
    output : {
        path: path.resolve(__dirname, './public/compiled'),
        filename: 'theFile-compiled.js',
        sourceMapFilename: '/' +  '[file].map'
    },
	module: {
        loaders: [
            {
                //test: /\.js?$/,
                test: /.js/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
	},
    recordsOutputPath: path.join(__dirname, "/public/compiled/records.json")
};
