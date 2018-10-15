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
    },
    module: {
        //setting the rules that webpack will use wen it encounters different filetypes
        rules: [
                    {
                        //test parameter will take a regular expression indiating the file extension it wants to target
                        test: /\.css$/,
                        //use parameter for specifying your loaders that webpack will use
                        use: [
                            {
                                //style will inject the css into the html
                                loader: "style-loader"
                            },
                            {
                                //css loader will lint the file
                                loader: "css-loader"
                            }
                        ]
                    }
                ]
    }
};