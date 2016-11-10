var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/components/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public/assets/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
