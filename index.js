const actions = require('@actions/core');

/** Google Service Account credentials  encoded in base64 */
const credentials = actions.getInput('credentials', { required: false });

try {
  // Get the input 'who-to-greet' from the workflow file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello, ${nameToGreet}!`);
  console.log(`Hello, ${credentials}!`);
  core.setOutput("greeting", `Hello, ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
