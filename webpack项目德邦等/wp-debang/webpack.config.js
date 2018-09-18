var webpack = require('webpack'),
    providePlugin = new webpack.ProvidePlugin({$:'jquery', jQuery:'jquery', 'window.jQuery':'jquery'});
module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: 'http://localhost:8080/out/',
        publicPath: 'http://localhost:8080/out/',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel-loader'},
            {test: /.css$/, loader: 'style-loader!css-loader'},
            {test: /.(jpg|png|gif|svg)$/, loader: 'url-loader?limit=8192&name=./[name].[ext]'}
        ]
    },
    plugins: [providePlugin]
}