'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-coc')) return;

  /**
   * Plugins
   */

  app.use(require('generate-defaults'));

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
    return app.src('templates/coc.md', { cwd: __dirname })
      .pipe(app.renderFile('*')).on('error', console.log)
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd))
  });
};
