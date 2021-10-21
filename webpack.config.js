const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
//   entry: './src/index.js',
entry: {
        app: './src/index.js',
        print: './src/print.js'
      },
      devtool: 'inline-source-map',
      devServer:{
        contentBase:'./dist'
      },
plugins: [
            //  new CleanWebpackPlugin(),
             new HtmlWebpackPlugin({
              title: '管理输出'
             })
          ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
          {
              test:/\.css$/,
              use:[
                  'style-loader','css-loader'
              ]
          },{
              test:/\.(png|svg|jpg|git)$/,
              use:['file-loader']
          }, {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                      'file-loader'
                   ]
          },{
              test:/\.(csv|tsv)$/,
              use:['csv-loader']
          },{
              test:/\.xml$/,
              use:['xml-loader']
          }
      ]
  }
};