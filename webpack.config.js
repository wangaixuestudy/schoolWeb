const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    // context: path.resolve(__dirname,'../'),
    entry: {
        app:path.join(__dirname,'/src/main/main.js'),
        admin:path.join(__dirname,'/src/admin/admin.js')
    },
    // entry:path.join(__dirname,'/src/main.js'),
    output: {
        filename: "js/[name].bundle.js",
        path: path.join(__dirname,'./dist')
    },
    devServer: {
        //contentBase: '/',
        publicPath:'/',
        open: true,
        port: 3002,
        hot: true,
        openPage:"main",
        index:"index.html",
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    },
    plugins: [//所有webpack插件的配置节点
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src/main/index.html'),
            filename: 'main/index.html',
            inject: true,
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src/admin/index.html'),
            filename: 'admin/index.html',
            inject: true,
            chunks: ['admin']
        }),
        //使vue组件使用下面配置的匹配规则的插件
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpg|png|bmp|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            //限制转换base64图片的大小，小的转换，大的不转换
                            limit: 8192,
                            //设置转换后的名字hash最高32位
                            name: 'img/[hash:8]-[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name:'fonts/[hash:8]-[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        //设置vue被导入时候包的路径
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
};