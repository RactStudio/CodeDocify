const parsers = require('./index');

function detectLanguage(filePath) {
  const ext = filePath.split('.').pop();
  if (ext === 'php') return 'php';
  if (ext === 'js') return 'js';
  if (['twig', 'html'].includes(ext)) return 'twig';
  return null;
}

function getParser(filePath) {
  const lang = detectLanguage(filePath);
  return lang ? parsers[lang] : null;
}

module.exports = { getParser };
