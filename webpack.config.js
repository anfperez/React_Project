let webpack = require("webpack");
let path = require("path");

let DIST_DIR = path.resolve(__dirname, "dist");
let SRC_DIR = path.resolve(__dirname, "src");


let config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR,
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		rules: [
		{ 
			test: /\.js?/,
			include: SRC_DIR,
			loader: "babel-loader",
			query: {
				presets: [
				"react", "es2015", "stage-2", "env"
				]
			}

		}
		]
	}
};

module.exports = config;