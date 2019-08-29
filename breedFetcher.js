const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (!error) {
      if (body.length !== 2) {
        callback(null, JSON.parse(body)[0]["description"].trim());
        return;
      } else callback(null, `Requested breed unable to be found. Search cancelled.`);
    } else callback(null, `Error! Fetch Request Failed.\n${error}`);
  });
};

module.exports = { fetchBreedDescription };