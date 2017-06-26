var plugin = require('..');
var posthtml = require('posthtml');
var expect = require('chai').expect;

function test(input, output, options, done) {
  posthtml()
    .use(plugin(options))
    .process(input)
    .then(function(result) {
      expect(output).to.eql(result.html);
      done();
    }).catch(function(error) {
      done(error);
    });
}

describe('expand', () => {
  it('expand style', (done) => {
    test(
      '<link expand="true" rel="stylesheet" href="./test/css/test.css">',
      '<style>.test{display:block;}\n</style>',
      {},
      done
    );
  });

  it('dont expand style', (done) => {
    test(
      '<link rel="stylesheet" href="./test/css/test.css">',
      '<link rel="stylesheet" href="./test/css/test.css">',
      {},
      done
    );
  });
});
