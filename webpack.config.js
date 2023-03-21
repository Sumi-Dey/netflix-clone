const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const port = process.env.PORT || 3000;
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                type: "asset/resource",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: port,
        historyApiFallback: true,
        open: true,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
};