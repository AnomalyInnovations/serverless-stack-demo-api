var nodeExternals = require('webpack-node-externals');
var path = require('path');
process.env.NODE_ENV = 'production';

module.exports = {
  entry: {
    create: './create.js',
    get: './get.js',
    list: './list.js',
    update: './update.js',
  },
  target: 'node',
  // because 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // run babel on all .js files and skip those in node_modules
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  // since we are going to create multiple APIs in this guide, and we are 
  // going to create a js file to for each, we need this output block
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};
