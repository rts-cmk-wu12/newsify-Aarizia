const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        tutorial: './src/tutorial.js',
        login: './src/login.js',
        archive: './src/archive.js',
        popular: './src/popular.js',
        settings: './src/settings.js'
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Newsify Home',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'Newsify Tutorial',
            filename: 'tutorial.html',
            chunks: ['tutorial']
        }),
        new HtmlWebpackPlugin({
            title: 'Newsify Login',
            filename: 'login.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            title: 'Newsify Archive',
            filename: 'archive.html',
            chunks: ['archive']
        }),
        new HtmlWebpackPlugin({
            title: 'Newsify Popular',
            filename: 'popular.html',
            chunks: ['popular']
        }),
        new HtmlWebpackPlugin({
            title: 'Newsify Settings',
            filename: 'settings.html',
            chunks: ['settings']
        }),

        //new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true
    }
}