module.exports = {
    env: {
      browser: true,  // Allows 'chrome' to be recognized as a global variable in the browser environment
    },
    rules: {
      'no-undef': ['error', { 'typeof': true }],
    },
  };
  