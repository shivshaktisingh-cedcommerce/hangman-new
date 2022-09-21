const path= require("path")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports={
    mode:"development" ,
    entry:"./index.js" ,
    output:{
        path:path.resolve(__dirname, "dist") ,
        filename:"main.js"
    } ,
    plugins: [
        new NodePolyfillPlugin()
    ] ,
    target:"web" ,
    devServer:{
        port:"9000" ,
        static:[
            "./dist" ,

        ] ,
        open:true ,
        hot:true ,
        liveReload:true 
    
    } ,
    resolve:{
        extensions:[".js" ,".jsx" ,".json"] ,
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve("util/"),
            assert: require.resolve("assert/"),
            path: require.resolve("path-browserify"),
            url: require.resolve("url/"),
            fs: false
        },
    } ,
    module:{
        rules:[
             
            {
                test:/\.(js|jsx)$/ ,
                use:"babel-loader" ,
                exclude:/node_modules/
            } ,
            {
                test:/\.css$/ ,
                use:["style-loader" , "css-loader"]
                }
        ] 

    }
}