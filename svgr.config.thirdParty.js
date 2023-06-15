const componentTemplate = require("./src/templates/thirdPartyTemplate");

module.exports = {
  typescript: true,
  icon: true,
  filenameCase: "kebab",
  replaceAttrValues: {
    "#6D7175": "currentColor",
  },
  svgProps: {
    role: "img",
    "aria-hidden": true,
  },
  plugins: [
    // Clean SVG files using SVGO
    "@svgr/plugin-svgo",
    // Generate JSX
    "@svgr/plugin-jsx",
    // Format the result using Prettier
    "@svgr/plugin-prettier",
  ],
  svgoConfig: {},
  template: componentTemplate,
};
