const
	autoprefixer = require('autoprefixer'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	path = require('path'),
	postCssPresetEnv = require('postcss-preset-env'),
	postCssScss = require('postcss-scss'),
	VueLoaderPlugin = require('vue-loader/lib/plugin');

const OUTPUT_DIR = path.resolve(__dirname, 'docs');

module.exports = {
	entry: {
		'app': './src/js/app.js',
		'stylesheet': './src/sass/stylesheet.scss'
	},
	output: {
		path: OUTPUT_DIR,
		filename: 'dist/js/[name].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['/node_modules/', '/src/css', OUTPUT_DIR],
				use: 'babel-loader'
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './images',
							name: '[name].[ext]',
						},
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: ['/node_modules', '/src/js', OUTPUT_DIR],
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
						options: {
							sourceMap: true,
							minimize: process.env.NODE_ENV === 'production',
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							syntax: postCssScss,
							plugins: () => [
								autoprefixer,
								postCssPresetEnv({
									stage: 0,
									features: {
										'color-mod-function': true,
										'alpha-hex-colors': true
									}
								}),
							],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	devServer: {
		overlay: true,
		contentBase: OUTPUT_DIR,
		watchContentBase: true,
		historyApiFallback: true,
		//https: process.env.NODE_ENV === 'development',
	},
	devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
	resolve: {
		extensions: ['.js', '.css', '.scss', '.vue'],
		alias: {
			'js': path.resolve(__dirname, './src/js'),
			'css': path.resolve(__dirname, './src/css'),
			'image': path.resolve(__dirname, './src/images'),
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'dist/css/[name].css',
		}),
		new CleanWebpackPlugin(['./dist/', './public/dist']),
		new VueLoaderPlugin(),
	]
};