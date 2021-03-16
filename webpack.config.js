const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ["./src/js/cookie-consent.js", "./src/scss/cookie-consent.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/cookie-consent.js",
	clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/index.html",
          to: ".",
        },
        {
          from: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
          to: "./js",
        },
        {
          from: "node_modules/bootstrap/dist/css/bootstrap.min.css",
          to: "./css",
        },
      ],
    }),
  ],
  mode: "development",
};

module.exports = config;
