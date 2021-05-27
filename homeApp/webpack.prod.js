// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// module.exports = {
//   output: {
//     publicPath: "https://localhost:8080/",
//   },

//   resolve: {
//     extensions: [".jsx", ".js", ".json",".tsx",".ts"],
//   },

//   devServer: {
//     port: 8080,
//   },

//   module: {
//     rules: [
//       { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
   
//     ],
//   },

//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//     }),
//     new ModuleFederationPlugin({
//       name: 'home',
//       library: { type: 'var', name: 'home'},
//       remotes: {
    
//         'mf-insights':'Insights',
//         'mf-matter':'Matter',
       

//       },
//       shared: require('./package.json').dependencies
//     })
//   ],
// };

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode:'production',
  output: {
    publicPath: "https://localhost:8080/",
 
   // publicPath: "https://luigi-teams-p-container.azurewebsites.net/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json",".tsx",".ts"],
  },

  devServer: {
    port: 8080,
  },

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
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
   
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home'},
      remotes: {
    
        'mf-insights':'Insights',
        'mf-matter':'Matter',
       

      },
      shared: require('./package.json').dependencies
    })
  ],
};
