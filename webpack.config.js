import webpack from 'webpack';
import path from 'path';

export default {
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
            test: /\.(scss|css)$/,
            loader: 'style-loader!css-loader!sass-loader'
        },
        { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
        },
        { 
            test: /\.jpg$/, 
            loader: "file-loader" 
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url-loader?limit=10000'
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};