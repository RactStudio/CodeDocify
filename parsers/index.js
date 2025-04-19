const phpParser = require('./php/phpParser');
const jsParser = require('./js/jsParser');
const cssParser = require('./css/cssParser');
const twigParser = require('./twig/twigHtmlParser');

module.exports = {
  php: phpParser,
  js: jsParser,
  css: cssParser,
  twig: twigParser,
  // Add more like 'python', 'java', etc
};
