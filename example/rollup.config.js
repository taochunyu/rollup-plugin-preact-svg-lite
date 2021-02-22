import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svg from '../rollup-plugin-preact-svg-lite';

export default {
  input: "example/main.tsx",
  output: {
    name: "example",
    dir: "example/dist",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    svg(),
    typescript({
      tsconfig: "./example/tsconfig.json",
    }),
  ]
}
