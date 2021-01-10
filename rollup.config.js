import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@wessberg/rollup-plugin-ts";
import sourcemaps from "rollup-plugin-sourcemaps";
import external from "rollup-plugin-peer-deps-external";
import builtins from "rollup-plugin-node-builtins";
import json from "@rollup/plugin-json";
import size from "rollup-plugin-size";

export default {
  input: "src/index.ts",
  output: {
    file: `build/index.js`,
    preferConst: true,
    format: "esm",
  },
  plugins: [
    json(),
    resolve({
      preferBuiltins: true,
    }), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    builtins(),
    external({
      includeDependencies: true,
    }),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    sourcemaps(),
    size(),
  ],
};
