var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
        './src/components/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public/assets/'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            include: path.join(__dirname, 'src')
        }]
    }
};