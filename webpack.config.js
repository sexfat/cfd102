const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');



module.exports = {
    entry: {
        index: './src/js/scripts.js',
        about: './src/js/about.js'
    },               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },// 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './dist'
                }
            },
                // 'style-loader',//跟MiniCssExtractPlugin 會衝突所以要關掉
                'css-loader',
                'sass-loader'
            ],
        },
        //babel loader
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,

            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
            include: path.resolve(__dirname, 'src'),//來源
        },

        ]

    },
    // 處裡對應模組
    plugins: [
        //清理舊的檔案
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css" // 打包出來的檔案
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            minify: false, // 壓縮html option
            meta: {
                viewport: 'width=device-width, initial-scale=1.0'
            },
            favicon: './src/img/favicon.ico',
            template: './src/index.html',
            //來源
            filename: 'index.html'
            // 目的地
        }),
        new HtmlWebpackPlugin({
            chunks: ['about'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './src/about.html',
            //來源
            filename: 'about.html'
            // 目的地
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // html template
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/nav.html'), // 模板
            location: 'header',//   嵌入標籤位置
            template_filename: ['index.html' , 'about.html']
        })
    ],            // 對應的插件
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },           // 服務器配置
    mode: 'development'      // 開發模式配置 production / development  
}