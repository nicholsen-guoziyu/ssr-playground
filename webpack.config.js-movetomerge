const path = require ('path');

const APP_DIR = path.resolve(__dirname,'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname,'public');

const config = {

    entry: APP_DIR + '/Client.js',
    devServer:{
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',


    mode: 'development',


    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
};

module.exports = config;