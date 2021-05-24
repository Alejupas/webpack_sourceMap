const path = require("path"); //node modulis dirbti su keliais iki failu

module.exports = {
  mode: "development",
  entry: {
    //kuri faila webpack paims kaip pagrindini faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {},
  module: {},
  plugins: [],
};
