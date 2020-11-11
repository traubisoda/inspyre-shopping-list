const tailwindcss = require('tailwindcss');

const prodPlugins = [
  require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.js', './public/index.html'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  }),
];

const defaultPlugins = [tailwindcss('./tailwind.js'), require('autoprefixer')];

const plugins =
  process.env.NODE_ENV === 'production'
    ? [...defaultPlugins, ...prodPlugins]
    : defaultPlugins;

module.exports = {
  plugins,
};
