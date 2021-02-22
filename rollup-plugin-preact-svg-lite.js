import {createFilter} from "@rollup/pluginutils";
import {transformSync} from "@babel/core";

// Copy from https://github.com/kuzivany/rollup-plugin-svgi
const cleanSVG = (raw) => {
  return raw
    .replace(/\s*<\?xml[\s\S]+?\?>\s*/, "")          // Remove XML declaration
    .replace(/\s*<!DOCTYPE[\s\S]*?>\s*/i, "")        // Remove DOCTYPE
    .replace(/[a-z]+:[a-z]+\s*=\s*"[\s\S]+?"/ig, "") // Remove namespaced attributes
    .replace(/\s*<!--[\s\S]*?-->\s*/ig, "");         // Remove comments
}

export const preactSVG = () => {
  const filter = createFilter("**/*.svg");

  return {
    name: "preact-svg",
    transform: (svg, id) => {
      if (!filter(id)) {
        return null;
      }

      const cleanedSVG = cleanSVG(svg);
      const jsx = `import {h} from "preact"; export default () => ${cleanedSVG}`;
      const transformed = transformSync(jsx, {
        plugins: [
          ["@babel/plugin-transform-react-jsx", {pragma: "h"}],
        ],
      });

      return {
        code: transformed.code,
        map: {mappings: ""},
      };
    },
  };
}

export default preactSVG;
