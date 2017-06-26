const parser = require('posthtml-parser');
const fs = require('fs');
const path = require('path');

module.exports = function(options) {
  const root = options.root || './';
  const encoding = options.encoding || 'utf-8';
  return function posthtmlInclude(tree) {
    tree.match({ tag: 'link', attrs: { expand: 'true', rel: 'stylesheet' } }, function(node) {
      const href = node.attrs.href;
      let content;
      if (href) {
        const src = path.resolve(root, href);
        content = parser(fs.readFileSync(src, encoding));
      }
      return {
        tag: 'style',
        content: content
      };
    });
    return tree;
  };
};
