/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

module.exports = {
  testFramework: {
    config: {
      forbidOnly: process.env.CI ? true : false,
      forbidPending: process.env.CI ? true : false,
      // Mocha flags any test exceeding the timeout as a failure, including
      // synchronous tests measured by wall-clock time, which multi-second
      // stalls on busy CI runners can push past the default of 2 seconds.
      timeout: 10000
    }
  }
};
