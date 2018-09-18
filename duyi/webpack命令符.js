Microsoft Windows [版本 10.0.14393]
(c) 2016 Microsoft Corporation。保留所有权利。

C:\Users\DIYU>node -v
v6.9.4

C:\Users\DIYU>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (cst) cst
version: (1.0.0)
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\DIYU\package.json:

{
  "name": "cst",
  "version": "1.0.0",
  "description": "webpack-5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10"
  },
  "devDependencies": {}
}


Is this ok? (yes)

C:\Users\DIYU>
C:\Users\DIYU>cd
C:\Users\DIYU

C:\Users\DIYU>cd Desktop

C:\Users\DIYU\Desktop>cd duyi

C:\Users\DIYU\Desktop\duyi>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (duyi)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\DIYU\Desktop\duyi\package.json:

{
  "name": "duyi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)

C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>webpack -v
C:\Users\DIYU\Desktop\duyi\webpack.config.js:11
});
^
SyntaxError: Unexpected token }
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
C:\Users\DIYU\Desktop\duyi\webpack.config.js:11
});
^
SyntaxError: Unexpected token }
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 03221540331ca9c1cc25
Version: webpack 1.14.0
Time: 137ms
   Asset    Size  Chunks             Chunk Names
index.js  1.4 kB       0  [emitted]  main
   [0] ./src/js/entry.js 9 bytes {0} [built]
^C终止批处理操作吗(Y/N)?
终止批处理操作吗(Y/N)?
终止批处理操作吗(Y/N)? y

C:\Users\DIYU\Desktop\duyi>npm install babel-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- UNMET PEER DEPENDENCY babel-core@^6.0.0
+-- babel-loader@6.2.10
| +-- find-cache-dir@0.1.1
| | +-- commondir@1.0.1
| | `-- pkg-dir@1.0.0
| |   `-- find-up@1.1.2
| |     +-- path-exists@2.1.0
| |     `-- pinkie-promise@2.0.1
| |       `-- pinkie@2.0.4
| +-- loader-utils@0.2.16
| | +-- big.js@3.1.3
| | +-- emojis-list@2.1.0
| | `-- json5@0.5.1
| +-- mkdirp@0.5.1
| | `-- minimist@0.0.8
| `-- object-assign@4.1.0
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of babel-core@^6.0.0 but none was installed.
npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>npm install babel babel-core babel-loader
npm WARN deprecated babel@6.5.2: Babel's CLI commands have been moved from the babel package to the babel-cli package
duyi@1.0.0 C:\Users\DIYU\Desktop\duyiivate: sill lifecycle private@0.1.6~postinstall: no script for postinstall, continuingontinuingtall, continuing
+-- ansi-regex@2.0.0
+-- ansi-styles@2.2.1
+-- babel@6.5.2
+-- babel-code-frame@6.20.0
| +-- chalk@1.1.3
| | +-- escape-string-regexp@1.0.5
| | +-- has-ansi@2.0.0
| | +-- strip-ansi@3.0.1
| | `-- supports-color@2.0.0
| +-- esutils@2.0.2
| `-- js-tokens@2.0.0
+-- babel-core@6.21.0
| +-- babel-generator@6.21.0
| | +-- detect-indent@4.0.0
| | | `-- repeating@2.0.1
| | |   `-- is-finite@1.0.2
| | |     `-- number-is-nan@1.0.1
| | `-- jsesc@1.3.0
| +-- babel-helpers@6.16.0
| +-- babel-messages@6.8.0
| +-- babel-register@6.18.0
| | +-- core-js@2.4.1
| | +-- home-or-tmp@2.0.0
| | | +-- os-homedir@1.0.2
| | | `-- os-tmpdir@1.0.2
| | `-- source-map-support@0.4.8
| +-- babel-runtime@6.20.0
| | `-- regenerator-runtime@0.10.1
| +-- babel-template@6.16.0
| +-- babel-traverse@6.21.0
| | +-- globals@9.14.0
| | `-- invariant@2.2.2
| |   `-- loose-envify@1.3.0
| +-- babel-types@6.21.0
| | `-- to-fast-properties@1.0.2
| +-- babylon@6.14.1
| +-- convert-source-map@1.3.0
| +-- debug@2.6.0
| | `-- ms@0.7.2
| +-- lodash@4.17.4
| +-- minimatch@3.0.3
| | `-- brace-expansion@1.1.6
| |   +-- balanced-match@0.4.2
| |   `-- concat-map@0.0.1
| +-- path-is-absolute@1.0.1
| +-- private@0.1.6
| +-- slash@1.0.0
| `-- source-map@0.5.6
+-- babel-loader@6.2.10
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>npm install css-loader style-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- css-loader@0.26.1
| +-- css-selector-tokenizer@0.7.0
| | +-- cssesc@0.1.0
| | +-- fastparse@1.1.1
| | `-- regexpu-core@1.0.0
| |   +-- regenerate@1.3.2
| |   +-- regjsgen@0.2.0
| |   `-- regjsparser@0.1.5
| |     `-- jsesc@0.5.0
| +-- cssnano@3.10.0
| | +-- autoprefixer@6.6.1
| | | +-- browserslist@1.5.2
| | | +-- caniuse-db@1.0.30000604
| | | +-- normalize-range@0.1.2
| | | `-- num2fraction@1.2.2
| | +-- decamelize@1.2.0
| | +-- defined@1.0.0
| | +-- has@1.0.1
| | | `-- function-bind@1.1.0
| | +-- postcss-calc@5.3.1
| | | +-- postcss-message-helpers@2.0.0
| | | `-- reduce-css-calc@1.3.0
| | |   +-- math-expression-evaluator@1.2.14
| | |   | `-- lodash.indexof@4.0.5
| | |   `-- reduce-function-call@1.0.2
| | +-- postcss-colormin@2.2.1
| | | `-- colormin@1.1.2
| | |   +-- color@0.11.4
| | |   | +-- clone@1.0.2
| | |   | +-- color-convert@1.8.2
| | |   | | `-- color-name@1.1.1
| | |   | `-- color-string@0.3.0
| | |   `-- css-color-names@0.0.4
| | +-- postcss-convert-values@2.6.0
| | +-- postcss-discard-comments@2.0.4
| | +-- postcss-discard-duplicates@2.0.2
| | +-- postcss-discard-empty@2.1.0
| | +-- postcss-discard-overridden@0.1.1
| | +-- postcss-discard-unused@2.2.3
| | | `-- uniqs@2.0.0
| | +-- postcss-filter-plugins@2.0.2
| | | `-- uniqid@4.1.0
| | |   `-- macaddress@0.2.8
| | +-- postcss-merge-idents@2.1.7
| | +-- postcss-merge-longhand@2.0.1
| | +-- postcss-merge-rules@2.0.11
| | | `-- vendors@1.0.1
| | +-- postcss-minify-font-values@1.0.5
| | +-- postcss-minify-gradients@1.0.5
| | +-- postcss-minify-params@1.2.2
| | | `-- alphanum-sort@1.0.2
| | +-- postcss-minify-selectors@2.1.1
| | | `-- postcss-selector-parser@2.2.2
| | |   +-- flatten@1.0.2
| | |   +-- indexes-of@1.0.1
| | |   `-- uniq@1.0.1
| | +-- postcss-normalize-charset@1.1.1
| | +-- postcss-normalize-url@3.0.8
| | | +-- is-absolute-url@2.1.0
| | | `-- normalize-url@1.8.0
| | |   +-- prepend-http@1.0.4
| | |   +-- query-string@4.2.3
| | |   | `-- strict-uri-encode@1.1.0
| | |   `-- sort-keys@1.1.2
| | |     `-- is-plain-obj@1.1.0
| | +-- postcss-ordered-values@2.2.2
| | +-- postcss-reduce-idents@2.4.0
| | +-- postcss-reduce-initial@1.0.1
| | +-- postcss-reduce-transforms@1.0.4
| | +-- postcss-svgo@2.1.6
| | | +-- is-svg@2.1.0
| | | | `-- html-comment-regex@1.1.1
| | | `-- svgo@0.7.1
| | |   +-- coa@1.0.1
| | |   | `-- q@1.4.1
| | |   +-- colors@1.1.2
| | |   +-- csso@2.2.1
| | |   | `-- clap@1.1.2
| | |   +-- js-yaml@3.6.1
| | |   | +-- argparse@1.0.9
| | |   | | `-- sprintf-js@1.0.3
| | |   | `-- esprima@2.7.3
| | |   +-- sax@1.2.1
| | |   `-- whet.extend@0.9.9
| | +-- postcss-unique-selectors@2.0.2
| | +-- postcss-value-parser@3.3.0
| | `-- postcss-zindex@2.2.0
| +-- lodash.camelcase@4.3.0
| +-- postcss@5.2.8
| | +-- js-base64@2.1.9
| | `-- supports-color@3.1.2
| |   `-- has-flag@1.0.0
| +-- postcss-modules-extract-imports@1.0.1
| +-- postcss-modules-local-by-default@1.1.1
| | `-- css-selector-tokenizer@0.6.0
| +-- postcss-modules-scope@1.0.2
| | `-- css-selector-tokenizer@0.6.0
| +-- postcss-modules-values@1.2.2
| | `-- icss-replace-symbols@1.0.2
| `-- source-list-map@0.1.7
+-- style-loader@0.13.1
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>webpack -w
C:\Users\DIYU\Desktop\duyi\webpack.config.js:13
            {test:/.css$/,loader:'style-loader!css-loader'}
            ^
SyntaxError: Unexpected token {
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 9847d0f837d2926c2ee3
Version: webpack 1.14.0
Time: 7553ms
   Asset    Size  Chunks             Chunk Names
index.js  1.4 kB       0  [emitted]  main
    + 1 hidden modules
Hash: 406e94f92bcc27cbe1f7^C终止批处理操作吗(Y/N)? ~C
终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: ae11915d2a72bbbb6b78
Version: webpack 1.14.0
Time: 8531ms
   Asset     Size  Chunks             Chunk Names
index.js  11.7 kB       0  [emitted]  main
    + 5 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: ae11915d2a72bbbb6b78
Version: webpack 1.14.0
Time: 2349ms
   Asset     Size  Chunks             Chunk Names
index.js  11.7 kB       0  [emitted]  main
    + 5 hidden modules
Hash: 4e14003d9753734f56fc
Version: webpack 1.14.0
Time: 76ms
   Asset     Size  Chunks             Chunk Names
index.js  11.7 kB       0  [emitted]  main
    + 5 hidden modules
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Hash: afcea958e6c6dde4e790
Version: webpack 1.14.0
Time: 58ms
   Asset     Size  Chunks             Chunk Names
index.js  11.7 kB       0  [emitted]  main
    + 5 hidden modules
                                                                                                                                                                                                                                                                                               Hash: eff8ec0deb646be86fae
Version: webpack 1.14.0
Time: 322ms
   Asset     Size  Chunks             Chunk Names
index.js  13.1 kB       0  [emitted]  main
    + 7 hidden modules

ERROR in ./src/js/demo1.js
Module not found: Error: Cannot resolve module 'tool.js' in C:\Users\DIYU\Desktop\duyi\src\js
 @ ./src/js/demo1.js 1:11-29

ERROR in ./src/js/demo2.js
Module not found: Error: Cannot resolve module 'tool.js' in C:\Users\DIYU\Desktop\duyi\src\js
 @ ./src/js/demo2.js 1:11-29
Hash: 2aa1792773b9b89c12b2
Version: webpack 1.14.0
Time: 152ms
   Asset     Size  Chunks             Chunk Names
index.js  13.1 kB       0  [emitted]  main
    + 8 hidden modules

ERROR in ./src/js/demo1.js
Module not found: Error: Cannot resolve module 'tool.js' in C:\Users\DIYU\Desktop\duyi\src\js
 @ ./src/js/demo1.js 1:11-29
Hash: e7c96fb50ba121476457
Version: webpack 1.14.0
Time: 91ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: 090b5c996d1485afd15e
Version: webpack 1.14.0
Time: 92ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: e457d084bb58bd9b7961
Version: webpack 1.14.0
Time: 72ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: 61cca13e93f34b71af1f
Version: webpack 1.14.0
Time: 162ms
   Asset     Size  Chunks             Chunk Names
index.js  13.1 kB       0  [emitted]  main
    + 8 hidden modules
Hash: 62ae7f09ac866dd5654f
Version: webpack 1.14.0
Time: 93ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: 66038abe027c6e281242
Version: webpack 1.14.0
Time: 67ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: 887948f43a4a77aeb42f
Version: webpack 1.14.0
Time: 217ms
   Asset     Size  Chunks             Chunk Names
index.js  13.1 kB       0  [emitted]  main
    + 8 hidden modules

ERROR in ./src/js/entry.js
Module not found: Error: Cannot resolve directory '.' in C:\Users\DIYU\Desktop\duyi\src\js
 @ ./src/js/entry.js 10:11-24
Hash: d57f75c6c4dd85407cef
Version: webpack 1.14.0
Time: 93ms
   Asset     Size  Chunks             Chunk Names
index.js  13.2 kB       0  [emitted]  main
   [8] ./src/Image/1.jpg 0 bytes [built] [failed]
    + 8 hidden modules

ERROR in ./src/Image/1.jpg
Module parse failed: C:\Users\DIYU\Desktop\duyi\src\Image\1.jpg Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected character '�' (1:0)
    at Parser.pp$4.raise (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2756:10)
    at Parser.pp$7.readToken (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2477:17)
    at Parser.pp$7.nextToken (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2468:15)
    at Parser.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:515:10)
    at Object.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:3098:39)
    at Parser.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\lib\Parser.js:902:15)
    at DependenciesBlock.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\lib\NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:310:10)
    at nextLoader (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:275:25)
    at C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:259:5
    at Storage.finished (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:38:16)
    at C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\graceful-fs\graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)
 @ ./src/js/entry.js 10:11-36
Hash: 8c7d329db6f6b752be23
Version: webpack 1.14.0
Time: 85ms
   Asset     Size  Chunks             Chunk Names
index.js  13.2 kB       0  [emitted]  main
   [8] ./src/Image/1.jpg 0 bytes [built] [failed]
    + 8 hidden modules

ERROR in ./src/Image/1.jpg
Module parse failed: C:\Users\DIYU\Desktop\duyi\src\Image\1.jpg Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected character '�' (1:0)
    at Parser.pp$4.raise (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2756:10)
    at Parser.pp$7.readToken (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2477:17)
    at Parser.pp$7.nextToken (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:2468:15)
    at Parser.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:515:10)
    at Object.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\acorn\dist\acorn.js:3098:39)
    at Parser.parse (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\lib\Parser.js:902:15)
    at DependenciesBlock.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\lib\NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:310:10)
    at nextLoader (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:275:25)
    at C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:259:5
    at Storage.finished (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:38:16)
    at C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\node_modules\graceful-fs\graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)
 @ ./src/js/entry.js 10:11-36
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install url-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- UNMET PEER DEPENDENCY file-loader@*
+-- url-loader@0.5.7
| `-- mime@1.2.11
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN url-loader@0.5.7 requires a peer of file-loader@* but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 167e337faaba73eeec5c
Version: webpack 1.14.0
Time: 10724ms
   Asset     Size  Chunks             Chunk Names
index.js  1.75 kB       0  [emitted]  main
    + 1 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install file-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- file-loader@0.9.0
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 167e337faaba73eeec5c
Version: webpack 1.14.0
Time: 1114ms
   Asset     Size  Chunks             Chunk Names
index.js  1.75 kB       0  [emitted]  main
    + 1 hidden modules
^C终止批处理操作吗(Y/N)?
^C系统无法打开指定的设备或文件。

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 167e337faaba73eeec5c
Version: webpack 1.14.0
Time: 1108ms
   Asset     Size  Chunks             Chunk Names
index.js  1.75 kB       0  [emitted]  main
    + 1 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install url-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- url-loader@0.5.7
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: c0df1950b125fa5ea4ee
Version: webpack 1.14.0
Time: 1201ms
   Asset     Size  Chunks             Chunk Names
index.js  1.76 kB       0  [emitted]  main
    + 1 hidden modules
Hash: 1b924e25a82b8a6ec47e
Version: webpack 1.14.0
Time: 67ms
   Asset     Size  Chunks             Chunk Names
index.js  1.76 kB       0  [emitted]  main
    + 1 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install url-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- url-loader@0.5.7
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>npm install file-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- file-loader@0.9.0
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 1b924e25a82b8a6ec47e
Version: webpack 1.14.0
Time: 1285ms
   Asset     Size  Chunks             Chunk Names
index.js  1.76 kB       0  [emitted]  main
    + 1 hidden modules
Hash: a1cc3cdeb53a11cfc396
Version: webpack 1.14.0
Time: 110ms
   Asset     Size  Chunks             Chunk Names
index.js  1.77 kB       0  [emitted]  main
    + 1 hidden modules
Hash: 1b924e25a82b8a6ec47e
Version: webpack 1.14.0
Time: 18ms
   Asset     Size  Chunks             Chunk Names
index.js  1.76 kB       0  [emitted]  main
    + 1 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 540f3d07d2d839b56c6d
Version: webpack 1.14.0
Time: 19056ms
   Asset     Size  Chunks             Chunk Names
 ./1.jpg  18.9 kB          [emitted]
index.js  13.2 kB       0  [emitted]  main
    + 9 hidden modules
Hash: f4ef1d4590f149ba9a38
Version: webpack 1.14.0
Time: 127ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install url-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- url-loader@0.5.7
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 6f89129b019133a7b9af
Version: webpack 1.14.0
Time: 2614ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>npm install file-loader
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
+-- file-loader@0.9.0
`-- UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

npm WARN babel-loader@6.2.10 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none was installed.
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 6f89129b019133a7b9af
Version: webpack 1.14.0
Time: 2822ms
   Asset   Size  Chunks             Chunk Names
index.js  13 kB       0  [emitted]  main
    + 8 hidden modules
Hash: c83018686d43481e80a2
Version: webpack 1.14.0
Time: 208ms
   Asset     Size  Chunks             Chunk Names
 ./1.jpg  18.9 kB          [emitted]
index.js  13.2 kB       0  [emitted]  main
    + 9 hidden modules
^C终止批处理操作吗(Y/N)?
^C系统无法打开指定的设备或文件。

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: a2453c8b2da2af97f6bb
Version: webpack 1.14.0
Time: 2586ms
   Asset     Size  Chunks             Chunk Names
 ./1.jpg  18.9 kB          [emitted]
index.js  13.2 kB       0  [emitted]  main
    + 9 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 5038d808121ca32b67d0
Version: webpack 1.14.0
Time: 2835ms
    Asset     Size  Chunks             Chunk Names
  ./1.jpg  18.9 kB          [emitted]
 index.js  13.2 kB       0  [emitted]  index
index2.js  1.41 kB       1  [emitted]  index2
    + 10 hidden modules
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>npm install webpack
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
`-- webpack@1.14.0
  +-- acorn@3.3.0
  +-- async@1.5.2
  +-- enhanced-resolve@0.9.1
  | +-- graceful-fs@4.1.11
  | `-- memory-fs@0.2.0
  +-- interpret@0.6.6
  +-- memory-fs@0.3.0
  | +-- errno@0.1.4
  | | `-- prr@0.0.0
  | `-- readable-stream@2.2.2
  |   +-- buffer-shims@1.0.0
  |   +-- core-util-is@1.0.2
  |   +-- inherits@2.0.3
  |   +-- isarray@1.0.0
  |   +-- process-nextick-args@1.0.7
  |   `-- util-deprecate@1.0.2
  +-- node-libs-browser@0.7.0
  | +-- assert@1.4.1
  | +-- browserify-zlib@0.1.4
  | | `-- pako@0.2.9
  | +-- buffer@4.9.1
  | | +-- base64-js@1.2.0
  | | `-- ieee754@1.1.8
  | +-- console-browserify@1.1.0
  | | `-- date-now@0.1.4
  | +-- constants-browserify@1.0.0
  | +-- crypto-browserify@3.3.0
  | | +-- browserify-aes@0.4.0
  | | +-- pbkdf2-compat@2.0.1
  | | +-- ripemd160@0.2.0
  | | `-- sha.js@2.2.6
  | +-- domain-browser@1.1.7
  | +-- events@1.1.1
  | +-- https-browserify@0.0.1
  | +-- os-browserify@0.2.1
  | +-- path-browserify@0.0.0
  | +-- process@0.11.9
  | +-- punycode@1.4.1
  | +-- querystring-es3@0.2.1
  | +-- stream-browserify@2.0.1
  | +-- stream-http@2.6.0
  | | +-- builtin-status-codes@3.0.0
  | | +-- to-arraybuffer@1.0.1
  | | `-- xtend@4.0.1
  | +-- string_decoder@0.10.31
  | +-- timers-browserify@2.0.2
  | | `-- setimmediate@1.0.5
  | +-- tty-browserify@0.0.0
  | +-- url@0.11.0
  | | +-- punycode@1.3.2
  | | `-- querystring@0.2.0
  | +-- util@0.10.3
  | | `-- inherits@2.0.1
  | `-- vm-browserify@0.0.4
  |   `-- indexof@0.0.1
  +-- optimist@0.6.1
  | `-- wordwrap@0.0.3
  +-- supports-color@3.1.2
  +-- tapable@0.1.10
  +-- uglify-js@2.7.5
  | +-- async@0.2.10
  | +-- uglify-to-browserify@1.0.2
  | `-- yargs@3.10.0
  |   +-- camelcase@1.2.1
  |   +-- cliui@2.1.0
  |   | +-- center-align@0.1.3
  |   | | +-- align-text@0.1.4
  |   | | | +-- longest@1.0.1
  |   | | | `-- repeat-string@1.6.1
  |   | | `-- lazy-cache@1.0.4
  |   | +-- right-align@0.1.3
  |   | `-- wordwrap@0.0.2
  |   `-- window-size@0.1.0
  +-- watchpack@0.2.9
  | +-- async@0.9.2
  | `-- chokidar@1.6.1
  |   +-- anymatch@1.3.0
  |   | +-- arrify@1.0.1
  |   | `-- micromatch@2.3.11
  |   |   +-- arr-diff@2.0.0
  |   |   | `-- arr-flatten@1.0.1
  |   |   +-- array-unique@0.2.1
  |   |   +-- braces@1.8.5
  |   |   | +-- expand-range@1.8.2
  |   |   | | `-- fill-range@2.2.3
  |   |   | |   +-- is-number@2.1.0
  |   |   | |   +-- isobject@2.1.0
  |   |   | |   `-- randomatic@1.1.6
  |   |   | +-- preserve@0.2.0
  |   |   | `-- repeat-element@1.1.2
  |   |   +-- expand-brackets@0.1.5
  |   |   | `-- is-posix-bracket@0.1.1
  |   |   +-- extglob@0.3.2
  |   |   +-- filename-regex@2.0.0
  |   |   +-- kind-of@3.1.0
  |   |   | `-- is-buffer@1.1.4
  |   |   +-- normalize-path@2.0.1
  |   |   +-- object.omit@2.0.1
  |   |   | +-- for-own@0.1.4
  |   |   | | `-- for-in@0.1.6
  |   |   | `-- is-extendable@0.1.1
  |   |   +-- parse-glob@3.0.4
  |   |   | +-- glob-base@0.3.0
  |   |   | `-- is-dotfile@1.0.2
  |   |   `-- regex-cache@0.4.3
  |   |     +-- is-equal-shallow@0.1.3
  |   |     `-- is-primitive@2.0.0
  |   +-- async-each@1.0.1
  |   +-- glob-parent@2.0.0
  |   +-- is-binary-path@1.0.1
  |   | `-- binary-extensions@1.8.0
  |   +-- is-glob@2.0.1
  |   | `-- is-extglob@1.0.0
  |   `-- readdirp@2.1.0
  |     `-- set-immediate-shim@1.0.1
  `-- webpack-core@0.6.9
    `-- source-map@0.4.4
      `-- amdefine@1.0.1

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
C:\Users\DIYU\Desktop\duyi\webpack.config.js:2
var uglifyPlugin = new webpack.optimize.UglifyPlugin({minumise:true});
                   ^

TypeError: webpack.optimize.UglifyPlugin is not a constructor
    at Object.<anonymous> (C:\Users\DIYU\Desktop\duyi\webpack.config.js:2:20)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
C:\Users\DIYU\Desktop\duyi\webpack.config.js:2
var uglifyPlugin = new webpack.optimize.UglifyPlugin({minumise:true});
                   ^

TypeError: webpack.optimize.UglifyPlugin is not a constructor
    at Object.<anonymous> (C:\Users\DIYU\Desktop\duyi\webpack.config.js:2:20)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
C:\Users\DIYU\Desktop\duyi\webpack.config.js:2
var uglifyPlugin = new webpack.optimize.UglifyPlugin({minumise:true});
                   ^

TypeError: webpack.optimize.UglifyPlugin is not a constructor
    at Object.<anonymous> (C:\Users\DIYU\Desktop\duyi\webpack.config.js:2:20)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at module.exports (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\convert-argv.js:80:13)
    at Object.<anonymous> (C:\Users\DIYU\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js:39:40)

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: faf22ce0591966cf7bc0
Version: webpack 1.14.0
Time: 5325ms
    Asset       Size  Chunks             Chunk Names
  ./1.jpg    18.9 kB          [emitted]
 index.js    4.65 kB       0  [emitted]  index
index2.js  238 bytes       1  [emitted]  index2
    + 10 hidden modules

WARNING in index.js from UglifyJs
Condition always false [./~/style-loader!./~/css-loader!./src/css/index.css:10,0]
Dropping unreachable code [./~/style-loader!./~/css-loader!./src/css/index.css:12,0]
Side effects in initialization of unused variable update [./~/style-loader!./~/css-loader!./src/css/index.css:7,0]
Condition always false [./~/style-loader/addStyles.js:24,0]
Dropping unreachable code [./~/style-loader/addStyles.js:25,0]
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 7ee653aece291d9c52b7
Version: webpack 1.14.0
Time: 24970ms
    Asset       Size  Chunks             Chunk Names
  ./1.jpg    18.9 kB          [emitted]
 index.js    4.46 kB    0, 2  [emitted]  index
index2.js   52 bytes    1, 2  [emitted]  index2
common.js  745 bytes       2  [emitted]  common.js
    + 10 hidden modules

WARNING in index.js from UglifyJs
Condition always false [./~/style-loader!./~/css-loader!./src/css/index.css:10,0]
Dropping unreachable code [./~/style-loader!./~/css-loader!./src/css/index.css:12,0]
Side effects in initialization of unused variable update [./~/style-loader!./~/css-loader!./src/css/index.css:7,0]
Condition always false [./~/style-loader/addStyles.js:24,0]
Dropping unreachable code [./~/style-loader/addStyles.js:25,0]
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: 7ee653aece291d9c52b7
Version: webpack 1.14.0
Time: 3914ms
    Asset       Size  Chunks             Chunk Names
  ./1.jpg    18.9 kB          [emitted]
 index.js    4.46 kB    0, 2  [emitted]  index
index2.js   52 bytes    1, 2  [emitted]  index2
common.js  745 bytes       2  [emitted]  common.js
    + 10 hidden modules

WARNING in index.js from UglifyJs
Condition always false [./~/style-loader!./~/css-loader!./src/css/index.css:10,0]
Dropping unreachable code [./~/style-loader!./~/css-loader!./src/css/index.css:12,0]
Side effects in initialization of unused variable update [./~/style-loader!./~/css-loader!./src/css/index.css:7,0]
Condition always false [./~/style-loader/addStyles.js:24,0]
Dropping unreachable code [./~/style-loader/addStyles.js:25,0]
^C终止批处理操作吗(Y/N)?
^C
C:\Users\DIYU\Desktop\duyi>
C:\Users\DIYU\Desktop\duyi>npm install extract-text-webpack-plugin
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
`-- extract-text-webpack-plugin@1.0.1
  `-- webpack-sources@0.1.3

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>npm install extract-text-webpack-plugin --save-dev
duyi@1.0.0 C:\Users\DIYU\Desktop\duyi
`-- extract-text-webpack-plugin@1.0.1

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN duyi@1.0.0 No description
npm WARN duyi@1.0.0 No repository field.

C:\Users\DIYU\Desktop\duyi>webpack -w
Hash: a96645f0812b6fc1a46d
Version: webpack 1.14.0
Time: 3488ms
    Asset       Size  Chunks             Chunk Names
  ./1.jpg    18.9 kB          [emitted]
 index.js  721 bytes    0, 2  [emitted]  index
index2.js   52 bytes    1, 2  [emitted]  index2
common.js  745 bytes       2  [emitted]  common.js
index.css   96 bytes    0, 2  [emitted]  index
    + 10 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
