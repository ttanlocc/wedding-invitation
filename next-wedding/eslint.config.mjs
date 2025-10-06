import nextPlugin from "@next/eslint-plugin-next";
import parser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules", "public", "build"]
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"]
  },
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
];
