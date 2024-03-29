const path = require("path");

module.exports = {
  // mode: "development", // mode is not necessary here. we can set it from the package.json
  entry: "./src/index.js",
  output: { path: path.join(__dirname, "public"), filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public')
  }
};
