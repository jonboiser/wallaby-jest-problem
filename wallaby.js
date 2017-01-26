module.exports = (wallaby) => {
  return {
    tests: [
      'src/**/*.spec.js',
    ],
    files: [
      '!src/**/*.spec.js',
      // { pattern: 'src/**/*.jsx', load: false },
      // { pattern: 'src/**/*.js', load: false },
      // { pattern: 'tests/**/*.snap' },
    ],
    // compilers: {
    //   '**/*.js*': wallaby.compilers.babel(),
    // },
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    // postProcessor: webpackPostprocessor,
    debug: true,
    // bootstrap(w) {
    //   w.testFramework.configure({
    //     setupFiles: [
    //       './config/jestConfig.js',
    //     ],
    //     moduleFileExtensions: [
    //       'js',
    //       'jsx',
    //       'json',
    //     ],
    //     coverageDirectory: './coverage',
    //   });
    // },
  };
};
