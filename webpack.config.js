const path = require("path")

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
            use: ["style-loader", "css-loader"]
        }]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.min.js"
    }
}