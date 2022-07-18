const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    module: {
      rules: [
        // JS
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            // babel with cache option
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        // CSS / SASS / SCSS
        {
          test: /\.css$/,
          use: [
            // style-loader or files
            'style-loader',
            // uppload CSS
            'css-loader',
          ],
        },
      ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        }
      }
};