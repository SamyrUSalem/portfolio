const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
                'css-loader' // Não é necessário definir minimize aqui
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
        new OptimizeCssAssetsPlugin() // Adiciona o plugin para otimizar os arquivos CSS
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.min.js"
    }
};