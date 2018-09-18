var webpack = require('webpack');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minumise:true});
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");





// less

var providePlugin = new webpack.ProvidePlugin({$:'jquery',jQurey:'jquery','window.jQuery':'jquery'});



module.exports= {
    entry:{
        index:'./src/js/entry.js',index2:'./src/js-2/entry.js'
    },
    // entry:'./src/js/entry.js',
    output:{
        path:'./out/',

// less
//   publicPath:'./',
   publicPath:'http://localhost:8080/out/',   //不要out/也可以引用资源


//作为href和url指向该文件

// 1.提取公共模块 模块插件
// 2、css样式独立打包 后 css里添加背景图片。找不到匹配路径。可以通过publicPath
// 3、publicPath 指定一个在浏览器中被引用的url地址。对于使用<script>和<link>加载器，当文件路径不同于他们的本地磁盘路径（由path
//指定）时候 publicPath被用来作为href或url指向该文件，这种做法在你需要将静态文件放在不同的域名或cdn上面的时候是很有用的。
//webpack dev server 也是用这个方式来读取文件的。与path搭配使用上[hash]就可以做好缓存方案啦
//)(资源打包出来后的他们的路径时 本身文件的路径后 加上 publicPath 和 url-loader 上的路径， 加上 本身资源的名字)
// 解决后 js添加img的路径时用 require会出现问题 所以打包出来的图片通过下面固定名字
// 3、url name = img/[name].[ext]
// 4、webpack-dev-server 把资源打包到服务器上
// 5、必须填写publicPath ---->当文件路径不同于他们的本地磁盘路径（由path指定）时候publickPath被用来作为href
// 或则url指向该文件


        // publicPath:'./out/',
        // filename:'index.js'
          filename:'[name].js'
    },
    module:{
        loaders:[
            {test:/.js$/,loader:'babel-loader'},

            // less
            {test:/.css$/,loader:ExtractTextPlugin.extract('style-loader','css-loader')},
            //  {test:/.css$/,loader:'style-loader!css-loader'},


           //less2
           {test:/.css$/,loader:'style-loader!css-loader'},


  // less2
            // {test:/.less$/,loader:'style-loader!css-loader!less-loader'},



            // css独立引入 不再打包道style,手动link引入
            {test:/.(jpg|png|gif|svg)$/,loader:'url-loader?limit=8192&name=./[name].[ext]'}
            //还有内部需要下载file-loader

        ]
    },


//   less
    plugins:[uglifyPlugin,CommonsChunkPlugin,new ExtractTextPlugin("[name].css"),providePlugin]


    //  plugins:[uglifyPlugin,CommonsChunkPlugin]


    // less2
      // plugins:[uglifyPlugin,CommonsChunkPlugin,providePlugin]


}
// npm intall babel babel-core babel-loader