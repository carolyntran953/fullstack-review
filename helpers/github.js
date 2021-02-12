const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  return new Promise((resolve, reject) => {
    // console.log('USER: ' + user);
    let options = {
      headers: {
        'User-Agent': 'carolytran953',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    return axios.get(`https://api.github.com/users/${user}/repos`, options)
    .then((res) => resolve(res.data))
    .catch((err) => {
      console.log('getReposByUsername: ' + err);
      reject(err);
    })
  });
}

module.exports.getReposByUsername = getReposByUsername;