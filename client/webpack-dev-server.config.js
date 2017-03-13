const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const routeComponentRegex = /src[\/\\]app[\/\\]containers[\/\\]routes[\/\\]([^\/\\]+).js$/;
const paths = [ // Only to test which files match the regex, juste in case
  'src/app/containers/routes/Home.js'
];

console.log(routeComponentRegex.test(paths[0])); // prints 'true'
const config = {
    // Entry points to the project
    entry: [path.join(__dirname, '/src/app/app.js')],
    devtool: 'eval',
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js'
    },
    plugins: [
        // Enables Hot Modules Replacement
        // new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [nodeModulesPath],
                loader: 'babel-loader',
            },
            // {
            //     test: routeComponentRegex,
            //     loaders: ['bundle-loader?lazy', 'babel-loader'],
            // },
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
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
