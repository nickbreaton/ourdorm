const https = require('https');
const { config, payload } = require('./data');

const body = { value1: `Be sure to turn in ${payload.assignmentName}!` };

const options = {
  hostname: 'maker.ifttt.com',
  port: 443,
  path: `/trigger/send_text/with/key/${config.ifttt.token}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const handler = (res) => {
  res.on('data', (d) => process.stdout.write(d));
  res.on('error', (d) => process.stderr.write(d));
}

const req = https.request(options, handler);
req.write(JSON.stringify(body));
req.end();
