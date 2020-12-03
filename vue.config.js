module.exports = {
    filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    publicPath: '/', // 引用静态资源的路径，默认'/'
    outputDir: 'dist', // 打包的目录结构，默认'dist'
    assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。默认''
    indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。默认'index.html'
}