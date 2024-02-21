const actions = require('@actions/core');
const { google } = require('googleapis');
const fs = require('fs');
const glob = require('glob');
const archiver = require('archiver');

/** Google Service Account credentials  encoded in base64 */
const credentials = actions.getInput('credentials', { required: false });

const credentialsJSON = JSON.parse(Buffer.from(credentials, 'base64').toString());
const scopes = ['https://www.googleapis.com/auth/drive'];
const auth = new google.auth.JWT(credentialsJSON.client_email, null, credentialsJSON.private_key, scopes);

try {
  // Get the input 'who-to-greet' from the workflow file
  const nameToGreet = actions.getInput('who-to-greet');
  console.log(`Hello, ${nameToGreet}!`);
  console.log(`Hello, ${credentials}!`);
  console.log(`Hello, ${auth}!`);
  actions.setOutput("greeting", `Hello, ${nameToGreet}!`);
} catch (error) {
  actions.setFailed(error.message);
}
