const Dotenv = require("dotenv-webpack");
const { plugin } = require("postcss");

module.exports = {
  plugins: [new Dotenv()],
};
