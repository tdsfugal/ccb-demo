var env = process.env.BABEL_ENV || process.env.NODE_ENV;
console.log('Running CCB in ' + env);

const presets =
  env === 'test'
    ? [['@babel/preset-env', { modules: 'commonjs' }]]
    : ['@babel/preset-env'];
const plugins = [];

module.exports = { presets, plugins };
