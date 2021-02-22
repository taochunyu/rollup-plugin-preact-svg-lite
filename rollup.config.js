import autoExternal from "rollup-plugin-auto-external";

export default {
  input: "lib.js",
  output: {
    exports: "default",
    file: "rollup-plugin-preact-svg-lite.js",
    format: "cjs",
  },
  plugins: [
    autoExternal(),
  ]
}
