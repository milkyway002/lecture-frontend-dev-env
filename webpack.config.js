const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  }
}