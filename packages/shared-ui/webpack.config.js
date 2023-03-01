const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        libraryTarget: "commonjs",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    }
};
