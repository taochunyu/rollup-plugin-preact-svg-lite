import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import svg from "..";

export default {
  input: "example/main.tsx",
  output: {
    name: "example",
    dir: "example/dist",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    resolve(),
    svg(),
    typescript({
      tsconfig: "./example/tsconfig.json",
    }),
  ]
}
