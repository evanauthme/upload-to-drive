"use strict";

var actions = require('@actions/core');

/** Google Service Account credentials  encoded in base64 */
var credentials = actions.getInput('credentials', {
  required: false
});
try {
  // Get the input 'who-to-greet' from the workflow file
  var nameToGreet = actions.getInput('who-to-greet');
  console.log("Hello, ".concat(nameToGreet, "!"));
  console.log("Hello, ".concat(credentials, "!"));
  actions.setOutput("greeting", "Hello, ".concat(nameToGreet, "!"));
} catch (error) {
  actions.setFailed(error.message);
}
