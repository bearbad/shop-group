const glob = require('glob');
const tsImportPluginFactory = require('ts-import-plugin')

function getPages (path) {
  const modules = glob.sync(path);
  return modules.reduce((ret, mod) => {
    let conf = require(mod)
    let modArr = mod.split('/')
    modArr.pop()
    let appName = modArr.pop()
    ret[appName] = Object.assign({}, {
      entry: `src/views/${appName}/${appName}.ts`,
      template: `src/views/${appName}/${appName}.html`,
      filename: `${appName}.html`
    }, conf);
    return ret;
  }, {})
};

const pages = getPages('./src/views/**/config.json')

module.exports = {
  pages,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => {
        options.getCustomTransformers = () => ({
          before: [tsImportPluginFactory({
            libraryName: 'vant',
            libraryDirectory: "es",
            style: true
          })]
        })
        return options
      })
  }
};
