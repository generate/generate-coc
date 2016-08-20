<p align="center">

<a href="https://github.com/generate/generate">
<img height="150" width="150" src="https://raw.githubusercontent.com/generate/generate/master/docs/logo.png">
</a>
</p>

Generate a CODE_OF_CONDUCT.md file for a project (Contributor Covenant Code of Conduct). Use from the command line when Generate's CLI is installed globally, or use as a plugin or sub-generator in your own generator.

# generate-coc

[![NPM version](https://img.shields.io/npm/v/generate-coc.svg?style=flat)](https://www.npmjs.com/package/generate-coc) [![NPM downloads](https://img.shields.io/npm/dm/generate-coc.svg?style=flat)](https://npmjs.org/package/generate-coc) [![Build Status](https://img.shields.io/travis/generate/generate-coc.svg?style=flat)](https://travis-ci.org/generate/generate-coc)

![generate-coc demo](https://raw.githubusercontent.com/generate/generate-coc/master/docs/demo.gif)

## Quickstart

Visit the [ContributorCovenant/contributor_covenant](https://github.com/ContributorCovenant/contributor_covenant) project for more details.

**Install**

Install [generate](https://github.com/generate/generate) and `generate-coc`:

```sh
$ npm install --global generate generate-coc
```

**Generate a contributor convenant**

To generate a `CODE_OF_CONDUCT.md` file to the current working directory, run:

```sh
$ gen coc
```

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

**For more information**:

* Visit the [generate project](https://github.com/generate/generate/)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Getting started

### Install

**Installing the CLI**

To run the `coc` generator from the command line, you'll need to install [Generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-coc**

Install this module with the following command:

```sh
$ npm install --global generate-coc
```

### Usage

Run this generator's `default` [task](https://github.com/generate/generate/blob/master/docs/tasks.md#default) with the following command:

```sh
$ gen coc
```

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

## Tasks

All available tasks.

### [coc](generator.js#L27)

Generates a `coc` file to the current working directory or specified `--dest`.

**Example**

```sh
$ gen coc
$ gen coc --dest ./foo
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## Next steps

### Running unit tests

It's never too early to begin running unit tests. When you're ready to get started, the following command will ensure the project's dependencies are installed then run all of the unit tests:

```sh
$ npm install && test
```

### Publishing your generator

If you're tests are passing and you're ready to publish your generator to [npm](https://www.npmjs.com), you can do that now with the following command:

**Are you sure you're ready?!**

Let's go!

```sh
$ npm publish
```

## About

### Community

Are you using [Generate](https://github.com/generate/generate) in your project? Have you published a [generator](https://github.com/generate/generate/blob/master/docs/generators.md) and want to share your project with the world?

Here are some suggestions!

* If you get like Generate and want to tweet about it, please feel free to mention `@generatejs` or use the `#generatejs` hashtag
* Show your love by starring [Generate](https://github.com/generate/generate) and `generate-coc`
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) (please use the `generatejs` tag in questions)
* **Gitter** Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish an generator, thank you! To make your project as discoverable as possible, please add the keyword `generategenerator` to package.json.

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-coc/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.1.30, on August 19, 2016._