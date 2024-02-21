"use strict";

var actions = require('@actions/core');
var _require = require('googleapis'),
  google = _require.google;
var fs = require('fs');
var glob = require('glob');
var archiver = require('archiver');

/** Google Service Account credentials  encoded in base64 */
var credentials = actions.getInput('credentials', {
  required: false
});
var credentialsJSON = JSON.parse(Buffer.from(credentials, 'base64').toString());
var scopes = ['https://www.googleapis.com/auth/drive'];
var auth = new google.auth.JWT(credentialsJSON.client_email, null, credentialsJSON.private_key, scopes);
try {
  // Get the input 'who-to-greet' from the workflow file
  var nameToGreet = actions.getInput('who-to-greet');
  console.log("Hello, ".concat(nameToGreet, "!"));
  console.log("Hello, ".concat(credentials, "!"));
  console.log("Hello, ".concat(auth, "!"));
  actions.setOutput("greeting", "Hello, ".concat(nameToGreet, "!"));
} catch (error) {
  actions.setFailed(error.message);
}
