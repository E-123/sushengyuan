const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const routeComponentRegex = /src[\/\\]app[\/\\]containers[\/\\]routes[\/\\]([^\/\\]+).js$/;

const config = {
    entry: [path.join(__dirname, '/src/app/app.js')],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js' // Name of output file
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('bundle.css'),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false
            }

        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Transfer Files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [routeComponentRegex, nodeModulesPath],
                loader: 'babel-loader',
            },
            {
                test: routeComponentRegex,
                loaders: ['bundle-loader?lazy', 'babel-loader'],
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules!postcss-loader'
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]

            }
        ]
    }
};

module.exports = config;
