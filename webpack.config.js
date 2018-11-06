'use strict';
// 零配置简化, 详情：https://www.yuque.com/easy-team/easywebpack/v4
module.exports = {
  plugins: {
    imagemini: false,
    extract: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commonCss: {
          test: /\.s?css$/,
          minChunks: 4,
          name: 'styles',
          chunks: 'all'
        }
      }
    }
  }
};