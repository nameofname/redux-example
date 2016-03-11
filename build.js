"use strict";

var webpack = require("webpack");
var compiler = webpack({// returns a Compiler instance
    watch: true,
    entry : './public/js/theFile.js',
    output : {
        path: "./public/compiled/",
        filename: "theFile-compiled.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    }
}, function(err, stats) {
    return console.log('BEGINNING WEBPACK...');
    if(err) {
        return console.log('HRRRD : Error with webpack bundling.');
    }
    var jsonStats = stats.toJson();
    if(jsonStats.errors.length > 0) {
        return console.log('SOFT : Error with webpack bundling.', jsonStats.errors);
    }
    if(jsonStats.warnings.length > 0) {
        return console.log('WARNING : Error with webpack bundling.', jsonStats.warnings);
    }
    return console.log('SUCCESS! Successfully compiled using Webpack.');
});


module.exports = compiler;