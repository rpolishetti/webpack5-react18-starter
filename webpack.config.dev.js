const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/app.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    compress: true,
    port: 9000,
    host: 'localhost',
    client: {
      logging: 'verbose',
      progress: true,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'postcss-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      }
    ],
  },
};

