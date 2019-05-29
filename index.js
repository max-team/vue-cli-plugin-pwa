const BasicPlugin = require('@marsjs/pwa-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (api, options) => {
    const version = options.pwa && options.pwa.version
        ? options.pwa.version
        : new Date().getTime().toString().substr(-6);

    const cacheName = `${api.service.pkg.name}-${version}`;
    const userOptions = Object.assign({}, options.pwa, {
        cacheName 
    });
    api.chainWebpack(webpackConfig => {
        webpackConfig
        .plugin('basic').use(BasicPlugin, [userOptions]);

        webpackConfig
        .plugin('copy').use(CopyWebpackPlugin, [[{
            from: `${process.cwd()}/public`,
            to: `${process.cwd()}/dist-h5/dist`,
            ignore: [
                '.DS_Store'
            ]
        }]]);
    });

}