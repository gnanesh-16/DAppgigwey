const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // ...existing configuration...
  plugins: [
    // ...existing plugins...
    new CopyWebpackPlugin({
      patterns: [
        { from: 'path/to/ffmpeg.dll', to: 'path/to/output/directory' }
      ]
    })
  ],
  // ...existing configuration...
};
