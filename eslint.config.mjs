import config from "eslint-config-reearth";

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...config(),
  {
    ignores: ["node_modules", "dist", "public"],
  },
];
