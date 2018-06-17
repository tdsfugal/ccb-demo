var env = process.env.BABEL_ENV || process.env.NODE_ENV;
console.log('Running ccb-demo-crypto in ' + env);

const presets =
  env === 'test'
    ? [['@babel/preset-env', { modules: 'commonjs' }]]
    : ['@babel/preset-env'];
const plugins =
  env === 'test' ? ['@babel/plugin-transform-modules-commonjs'] : [];

module.exports = { presets, plugins };
