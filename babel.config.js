module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: [".src"],
          alias: {
            src: "./src",
            components: "./src/components",
            constants: "./src/constants",
            screens: "./src/screens",
            scripts: "./src/scripts",
            server: "./src/server",
            tabs: "./src/tabs",
          },
        },
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": "./.env",
        "blacklist": null,
        "whitelist": null,
        "safe": true,
        "allowUndefined": true
      }],
    ],
  };
};
