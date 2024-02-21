const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname,'./src/index.js')
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name][contenthash].js',
		clean:true,
		assetModuleFilename: '[name][ext]',
	},
	devtool: 'source-map',

	devServer: {
		static: {
			directory:path.resolve(__dirname,'dist')
		},
		port:3000,
		open:true,
		hot: true,
		compress:true,
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						]
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
				    filename: 'assets/[name][contenthash][ext][query]'
				}
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new BundleAnalyzerPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name][contenthash].css',
		}),
	]
};