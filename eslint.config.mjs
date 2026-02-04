import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { ignores: ["node_modules/", "dist/", "out/", "**/*.test.js"] },

  pluginJs.configs.recommended,

  {
    files: ["src/index.js", "src/**/*.server.js", "server/**/*.js", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
    },
  },

  {
    files: ["src/main.js", "src/**/*.client.js", "web/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
    },
  },

  pluginJs.configs.recommended, 

  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
    },
  },
];