const glob = require('glob');

function getPages (path) {
  const modules = glob.sync(path);
  return modules.reduce((ret, mod) => {
    let conf = require(mod)
    let modArr = mod.split('/')
    modArr.pop()
    let appName = modArr.pop()
    ret[appName] = Object.assign({}, {
      entry: `src/views/${appName}/${appName}.js`,
      template: `src/views/${appName}/${appName}.html`,
      filename: `${appName}.html`
    }, conf);
    return ret;
  }, {})
};

const pages = getPages('./src/views/**/config.json')

module.exports = {
  pages
};
