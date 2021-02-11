const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  owner: String,
  name: String,
  description: String,
  url: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo();
  repo.id = req.body.id;
  repo.owner = req.body.owner.login;
  repo.name = req.body.name;
  repo.description = req.body.description;
  repo.url = req.body.url;
  repo.stars = req.body.stargazers_count;
  repo.save = (err, result) => {
    if (err) {
      console.log('save error: ' + err);
    } else {
      console.log('save result: ' + result);
    }
  }
}

module.exports.save = save;