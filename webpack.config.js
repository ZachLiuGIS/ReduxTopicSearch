var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './react_src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: "bundle.js",
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {test: /\.json$/, loader: "json-loader"}
        ]
    }
};
