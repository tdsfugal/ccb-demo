var env = process.env.BABEL_ENV || process.env.NODE_ENV;
console.log('Running in ' + env);

const presets = ['@babel/preset-env'];
const plugins = [];

module.exports = { presets, plugins };
