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
            // babel avec une option de cache
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
            // style-loader ou fichier
            'style-loader',
            // Chargement du CSS
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