const path = require('path');
const src = path.resolve(__dirname, 'src/main/js');


module.exports = {
	entry: ['babel-polyfill','./src/index.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module:{
		rules: [
    		{
      			test: /\.m?js$/,
      			exclude: /node_modules/,
      			use: {
        			loader: 'babel-loader',
        			options: {
          				presets: [
            				['@babel/preset-env', { targets: "defaults" }]
          				]
        			}
      			}
    		},
    		/*{
    			test: /\.(mp3|wav)$/,
    			loader: 'file-loader',
    		},*/
    		{
    			test:/\.css$/i,
    			use: ['style-loader', 'css-loader'],
    		},
    		{
        	test: /\.html$/i,
        	loader: 'html-loader',
      	},
        {
          test:  /\.(gif|png|jpe?g|svg)$/i,
          use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            }
          }]
        }
  		]
	}
}

