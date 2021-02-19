const { load } = require('dotenv/types');
const { request } = require('express');

function loadScript() {
  console.log('script is loaded');
}
window.onload = loadScript;

app.route('/api')
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    console.log('Now send something back to your client');
    res.json({message: 'Hello World'});
  });