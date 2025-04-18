import Fuse from 'fuse.js';

export async function initSearch() {
  const res = await fetch('/search-index.json');
  const docs = await res.json();

  const fuse = new Fuse(docs, {
    keys: ['content'],
    includeScore: true,
    threshold: 0.3,
  });

  return fuse;
}
