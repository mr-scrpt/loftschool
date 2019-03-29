const fs = require("fs");
const path = require("path");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss"
    }),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
      cascade: false
    }),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
        ,fs.readFileSync("./src/styles/mixins.pcss", "utf-8")
      )
    }),

    require('postcss-mixins'),
    require("postcss-color-function"),
    require('postcss-simple-vars'),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/images/icons"
    }),
    require("cssnano"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/]
    })
  ]
};
