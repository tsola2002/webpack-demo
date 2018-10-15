const path = require("path")


module.exports = {
    entry: {
        main: ["./src/main.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        //declaring an absolute path using the path package that comes standard with node
        path: path.resolve(__dirname, "../dist"),
        //specify root path as our output path
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
    }
}