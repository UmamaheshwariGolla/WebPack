const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: "http://localhost:8083/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8083,
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
      name: 'Insights',
      library: {
        type: 'var', name: 'Insights'
      },
      filename: 'remoteEntryInsights.js',
      exposes: {
        './Insights': './src/Insights'
      },
      shared: require('./package.json').dependencies
    })
  ],
};