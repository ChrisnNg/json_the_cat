const request = require('request');
const getArgv = process.argv.splice(2);
const fetch = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    console.log('error', error);
    console.log('statusCode', response.statusCode);
    console.log('body', body, body.length);
    if (body.length > 2) {
      console.log(JSON.parse(body)[0]["description"]);
    } else console.log("Request breed unable to be found. Search cancelled.");
  });

};

fetch(getArgv[0]);

