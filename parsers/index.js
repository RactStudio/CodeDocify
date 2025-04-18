const phpParser = require('./php/phpParser');
const jsParser = require('./js/jsParser');
const twigParser = require('./twig/twigHtmlParser');

module.exports = {
  php: phpParser,
  js: jsParser,
  twig: twigParser,
  // Add more like 'python', 'java', etc later
};
