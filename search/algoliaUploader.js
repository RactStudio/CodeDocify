const algoliasearch = require('algoliasearch');

const client = algoliasearch('APP_ID', 'ADMIN_API_KEY');
const index = client.initIndex('codedocify_docs');

function uploadToAlgolia(documents) {
  return index.saveObjects(documents, { autoGenerateObjectIDIfNotExist: true });
}
