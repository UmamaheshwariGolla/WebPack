const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
       
    publicPath: "http://localhost:8081/", 
   // publicPath: "https://luigi-teams-p-matter.azurewebsites.net/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json",'.ts', '.tsx'],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
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
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    
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
    }),
   
  ],
};
