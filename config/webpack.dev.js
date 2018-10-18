const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

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
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: "source-map",
    module: {
        //setting the rules that webpack will use wen it encounters different filetypes
        rules: [
                    {
                        //test parameter will take a regular expression indicating the file extension it wants to target
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
                test: /\.sass$/,
                //use parameter for specifying your loaders that webpack will use
                use: [
                    {
                        //style will inject the css into the html
                        loader: "style-loader"
                    },
                    {
                        //css loader will lint the file
                        loader: "css-loader"
                    },
                    {
                        //sass loader will lint the file
                        loader: "sass-loader"
                    }
                ]
                    },
                    {
                        //test parameter will take a regular expression indiating the file extension it wants to target
                        test: /\.less$/,
                        //use parameter for specifying your loaders that webpack will use
                        use: [
                            {
                                //style will inject the css into the html
                                loader: "style-loader"
                            },
                            {
                                //css loader will lint the file
                                loader: "css-loader"
                            },
                            {
                                //sass loader will lint the file
                                loader: "less-loader"
                            }
                        ]
                    },
                    {
                        //test parameter will take a regular expression indiating the file extension it wants to target
                        test: /\.styl$/,
                        //use parameter for specifying your loaders that webpack will use
                        use: [
                            {
                                //style will inject the css into the html
                                loader: "style-loader"
                            },
                            {
                                //css loader will lint the file
                                loader: "css-loader"
                            },
                            {
                                //css loader will lint the file
                                loader: "postcss-loader"
                            },
                            {
                                //sass loader will lint the file
                                loader: "stylus-loader"
                            }
                        ]
                    },
                    {
                        //test parameter will take a regular expression indiating the file extension it wants to target
                        test: /\.html$/,
                        //use parameter for specifying your loaders that webpack will use
                        use: [
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
                    },
                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: "babel-loader"
                            }
                        ],
                        exclude: /node_modules/
                    }
                ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};