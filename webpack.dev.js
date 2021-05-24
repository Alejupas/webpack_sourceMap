const path = require("path"); //node modulis dirbti su keliais iki failu
//html generavimo pluginas
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    //kuri faila webpack paims kaip pagrindini faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {},
  module: {},
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
