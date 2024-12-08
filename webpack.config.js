const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./public/index.html"
			},
		),
	],
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
	},
};
