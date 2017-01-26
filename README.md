# Conflicting versions of JSDOM

Currently, if you run this repository in Atom, you will get this error:

```
TypeError: require(...).evalVMScript is not a function
    at JSDOMEnvironment.runScript (/Users/jon/github/wallaby-jest-problem/node_modules/jest-environment-jsdom/build/index.js:55:31)
    at jasmine2 (/Users/jon/github/wallaby-jest-problem/node_modules/jest-jasmine2/build/index.js:38:15)
    at runTest (/Users/jon/github/wallaby-jest-problem/node_modules/jest/node_modules/jest-cli/build/runTest.js:50:10)
    at promise.then (/Users/jon/github/wallaby-jest-problem/node_modules/jest/node_modules/jest-cli/build/TestRunner.js:304:14)
    at process._tickCallback (internal/process/next_tick.js:103:7)
```

If you remove `jsdom`

```
npm uninstall --save-dev jsdom
```

and then re-run, the error goes away.
