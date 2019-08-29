const request = require('request');
const getArgv = process.argv.splice(2);
const fetch = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (!error) {
      if (body.length > 2) {
        console.log(JSON.parse(body)[0]["description"]);
      } else console.log("Request breed unable to be found. Search cancelled.");
    } else console.log('error! Request Failed.\n', error);
  });
};

fetch(getArgv[0]);