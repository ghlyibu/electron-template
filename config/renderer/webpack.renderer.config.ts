import type { Configuration } from 'webpack';

import { rules } from '../common/webpack.rules';
import { plugins } from '../common/webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
}, {
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: {
      exclude: /node_modules/,
      presets: ['@babel/preset-react']
    }
  }
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
