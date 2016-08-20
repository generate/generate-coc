'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-coc')) return;

  /**
   * Generates a `coc` file to the current working directory or
   * specified `--dest`.
   *
   * ```sh
   * $ gen coc
   * $ gen coc --dest ./foo
   * ```
   * @name coc
   * @api public
   */

  app.task('default', ['coc']);
  app.task('coc', function(cb) {
    return app.src('templates/contributor-convenant.md', { cwd: __dirname })
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(function(file) {
        file.basename = 'CODE_OF_CONDUCT.md';
        return app.cwd;
      }))
  });
};
