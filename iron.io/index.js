var https = require('https');

https.get(`https://maker.ifttt.com/trigger/send_text/with/key/${process.env.IFTTT_TOKEN}`, function() {
  console.log('success');
});
