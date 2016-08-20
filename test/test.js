'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var del = require('delete');
var pkg = require('../package');
var generator = require('..');
var app;

var isTravis = process.env.CI || process.env.TRAVIS;
var fixtures = path.resolve.bind(path, __dirname, 'fixtures');
var actual = path.resolve.bind(path, __dirname, 'actual');

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = actual(name);

    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      del(actual(), cb);
    });
  };
}

describe('generate-coc', function() {
  this.slow(250);

  if (!process.env.CI && !process.env.TRAVIS) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.cwd = actual();
    app.option('dest', actual());

    // see: https://github.com/jonschlinkert/ask-when
    app.option('askWhen', 'not-answered');

    // set default data to use in templates. feel free to remove anything
    // that isn't used (e.g. if "username" isn't defined in templates, just remove it)
    app.data(pkg);
    app.data('project', pkg);
    app.data('username', 'foo');
    app.data('owner', 'foo');
  });

  afterEach(function(cb) {
    del(actual(), cb);
  });

  describe('tasks', function() {
    it('should extend tasks onto the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('coc'));
    });

    it('should run the `default` task with .build', function(cb) {
      app.use(generator);
      app.build('default', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `default` task with .generate', function(cb) {
      app.use(generator);
      app.generate('default', exists('CODE_OF_CONDUCT.md', cb));
    });
  });

  describe('coc (CLI)', function() {
    it('should run the default task using the `generate-coc` name', function(cb) {
      if (isTravis) {
        this.skip();
        return;
      }
      app.use(generator);
      app.generate('generate-coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the default task using the `generator` generator alias', function(cb) {
      if (isTravis) {
        this.skip();
        return;
      }
      app.use(generator);
      app.generate('coc', exists('CODE_OF_CONDUCT.md', cb));
    });
  });

  describe('coc (API)', function() {
    it('should run the default task on the generator', function(cb) {
      app.register('coc', generator);
      app.generate('coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `coc` task', function(cb) {
      app.register('coc', generator);
      app.generate('coc:coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `default` task when defined explicitly', function(cb) {
      app.register('coc', generator);
      app.generate('coc:default', exists('CODE_OF_CONDUCT.md', cb));
    });
  });

  describe('sub-generator', function() {
    it('should work as a sub-generator', function(cb) {
      app.register('foo', function(foo) {
        foo.register('coc', generator);
      });
      app.generate('foo.coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `default` task by default', function(cb) {
      app.register('foo', function(foo) {
        foo.register('coc', generator);
      });
      app.generate('foo.coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `generator:default` task when defined explicitly', function(cb) {
      app.register('foo', function(foo) {
        foo.register('coc', generator);
      });
      app.generate('foo.coc:default', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run the `generator:coc` task', function(cb) {
      app.register('foo', function(foo) {
        foo.register('coc', generator);
      });
      app.generate('foo.coc:coc', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should work with nested sub-generators', function(cb) {
      app
        .register('foo', generator)
        .register('bar', generator)
        .register('baz', generator)

      app.generate('foo.bar.baz', exists('CODE_OF_CONDUCT.md', cb));
    });

    it('should run tasks as a sub-generator', function(cb) {
      app = generate({silent: true, cli: true});

      app.generator('foo', function(sub) {
        sub.register('coc', require('..'));
        sub.generate('coc:unit-test', function(err) {
          if (err) return cb(err);
          assert.equal(app.base.get('cache.unit-test'), true);
          cb();
        });
      });
    });
  });
});
