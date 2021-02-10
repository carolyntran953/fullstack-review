const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    // url: 'https://api.github.com',
    baseUrl: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(`/users/${user}/repos`, options)
    .then((res) => res.data)
    .catch((err) => console.log('getReposByUserName: ' + err));
}

module.exports.getReposByUsername = getReposByUsername;