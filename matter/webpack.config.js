const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
       chunkFilename: '[name].[chunkhash].js',
    publicPath: "http://localhost:8084/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8084,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
 
    new ModuleFederationPlugin({
      name: 'Matter',
      library: {
        type: 'var', name: 'Matter'
      },
      filename: 'remoteEntryMatter.js',
      exposes: {
        './Matter': './src/Matter'
      },
      shared: require('./package.json').dependencies
    })
  ],
};
