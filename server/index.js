const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { save } = require ('../database/index.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('user: ' + req.body.user);
  getReposByUsername(req.body.user)
  .then((repos) => {
    // console.log(repos);
    repos.forEach(repo => {
      save(repo)
    });
    res.send(repos);
  })
  .catch((err) => {
    console.log('save error in server: ' + err);
    // res.sendStatus(404);
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongoose.connection.collection('repos').find({}).limit(25).sort({'stars': -1}).toArray()
  .then((docs) => {
    console.log(docs);
    res.send(docs);
  })
  .catch((err) => {
    console.log('get top repos: ' + err);
  });

  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

