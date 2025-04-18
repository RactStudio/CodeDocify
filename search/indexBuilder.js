const fs = require('fs');
const path = require('path');

function buildSearchIndex(outputDir = './dist') {
  const index = [];

  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (fullPath.endsWith('.html') || fullPath.endsWith('.twig')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const stripped = content.replace(/<[^>]+>/g, ''); // remove HTML tags
        index.push({
          path: fullPath.replace(outputDir, ''),
          content: stripped.slice(0, 500), // limit for preview
        });
      }
    });
  }

  walk(outputDir);
  fs.writeFileSync('./dist/search-index.json', JSON.stringify(index));
}

module.exports = { buildSearchIndex };
