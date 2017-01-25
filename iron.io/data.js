const fs = require('fs');

module.exports = {
  config: readDataFile('CONFIG_FILE'),
  payload: readDataFile('PAYLOAD_FILE')
};

function readDataFile(env) {
  try {
    return JSON.parse(fs.readFileSync(process.env[env]).toString());
  } catch (e) {
    console.error(`Warning: could not read file for ${env}`);
    return {};
  }
}
