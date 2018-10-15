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
        contentBase: "dist",
        //displays errors on the browser
        overlay: true
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
                    },
                    {
                        //test parameter will take a regular expression indiating the file extension it wants to target
                        test: /\.html$/,
                        //use parameter for specifying your loaders that webpack will use
                        use: [
                            {
                                //file-loader will determine how the file is being named as it been outputted
                                loader: "file-loader",
                                options: {
                                    name: "[name].html"
                                }
                            },
                            {
                                //extract-loader tells webpack to load the file separately
                                loader: "extract-loader"
                            },
                            {
                                //html-loader does the linting
                                loader: "html-loader",
                                options: {
                                    //target the src attribute of the image tag
                                    attrs: ["img:src"]
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(jpg|gif|png)$/,
                        use: [
                            {
                                loader: "file-loader",
                                options: {
                                    name: "images/[name]-[hash:8].[ext]"
                                }
                            }
                        ]
                    }
                ]
    }
};