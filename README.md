# vue-cli-plugin-mars-pwa

> pwa plugin for vue-cli

To get pwa configuration and pass them to webpack plugin mars-pwa-webpack-plugin.
The webpack Plugin generates the cache whiteManifestList and blackManifestList

## Configuration
Configuration is handled via the `pwa` property of the `vue.config.js` file

- **pwa.include**
    If you want to cache some type of file, you can use it. If you ignore this, 
    the default value of it is `[ /\.html$/, /\.jpg$/, /\.png$/, /\.css$/, /\.js$/]`

- **pwa.exclude**
    If you dont want to cache some api or some type of file, or some file specified, 
    you can use this param

- **pwa.versiob**
    This param is intended to generate the service worker cachename.
    The cache name is `MARS_PWA_CACHE-${api.service.pkg.name}-${options.pwa.version}`
    When you changed the pwa options, you may supply the version
### Example Configuration

```js
// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
    pwa: {
        include: [ /\.html$/, /\.jpg$/, /\.png$/, /\.css$/, /\.js$/], 
        version: '1-1-4', // part of cacheName
        exclude: ['app.css'] 
    },
}
```
