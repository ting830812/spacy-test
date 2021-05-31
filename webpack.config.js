const path = require('path');
const process = require('process');
const isProd = process.env.NODE_ENV === 'production';
const nodeEnv = isProd ? 'production' : 'development';

const conf = {
  mode: nodeEnv,

  entry: {
    bundle_spacy: './src/client/spacy.js',
    bundle_uw: './src/client/uw.js',
    bundle_stanford: './src/client/stanford.js',
    bundle_spacy_abstract: './src/client/spacy_abstract.js',
    bundle_spacy_abstract_drug_disease: './src/client/spacy_abstract_drug_disease.js',
    polyfills: './src/client/polyfills.js'
  },

  output: {
    filename: '[name].js'
  },

  devtool: !isProd ? 'inline-source-map' : false,

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = conf;