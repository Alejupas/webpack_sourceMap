const path = require("path"); //node modulis dirbti su keliais iki failu
//html generavimo pluginas
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    //kuri faila webpack paims kaip pagrindini faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //isvalom pries tai buvusius dailus diste
  },
  module: {
    rules: [
      //css loader
      {
        test: /\.css$/i, //pritaikom css failam
        use: ["style-loader", "css-loader"], //uzkraunam css
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/template.html",
      templateParameters: {
        title: "Now we know webpack.",
        mainTitle: "Thats the heading of main title",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
};
