const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin"); // Adicionando o plugin de minificação JavaScript
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        email: "./src/email.js",
        styleSwitcher: "./src/style-switcher.js"
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: "./css", to: "css" }]
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.min.js"
    },
};
