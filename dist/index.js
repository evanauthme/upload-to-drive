"use strict";

var core = require('@actions/core');
try {
  // Get the input 'who-to-greet' from the workflow file
  var nameToGreet = core.getInput('who-to-greet');
  console.log("Hello, ".concat(nameToGreet, "!"));
  core.setOutput("greeting", "Hello, ".concat(nameToGreet, "!"));
} catch (error) {
  core.setFailed(error.message);
}
