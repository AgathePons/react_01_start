const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        }
      }
};