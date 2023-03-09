const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    content: path.resolve(__dirname, "..", "src/scripts", "content.ts"),
    "audio-slider": path.resolve(
      __dirname,
      "..",
      "src/scripts",
      "audio-slider.ts"
    ),
    "mute-button": path.resolve(
      __dirname,
      "..",
      "src/scripts",
      "mute-button.ts"
    ),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
  ],
};
