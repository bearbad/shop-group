module.exports = {
  plugins: {
    autoprefixer: {
    },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      propList: [
			  "*"
			],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
			minPixelValue: 1,
			mediaQuery: false,
			replace: true,
			exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
  }
};
