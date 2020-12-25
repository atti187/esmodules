module.exports = {
  presets: [
    [
      // ES features necessary for user's Node version
      require("@babel/preset-env").default,
      {
        targets: {
          node: "current",
        },
      },
    ],
    [require("@babel/preset-typescript").default],
  ],
  plugins: [
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [require("@babel/plugin-transform-runtime").default],
  ],
};
