"use strict"; 

//var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, './public/js/theFile.js'),
    output : {
        path: path.resolve(__dirname, './public/compiled'),
        filename: 'theFile-compiled.js',
        sourceMapFilename: '/' +  '[file].map'
        //hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
        //hotUpdateMainFilename: 'hot/[hash].hot-update.json',
        //publicPath: '/'
    },
    recordsOutputPath: path.join(__dirname, "/public/compiled/records.json"),
	module: {
        loaders: [
            {
                //test: /\.js?$/,
                test: /.js/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
	}
};
