var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
         'webpack/hot/dev-server',
         'webpack-hot-middleware/client',
        './src'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: 'http://0.0.0.0:3001/public/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.scss']
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader']
        },
        {
            test: /\.scss$/,
            include: path.join(__dirname,'src'),
            loader: 'style-loader!css-loader!sass-loader'
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};