const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  user: String,
  name: String,
  description: String,
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo();
  repo.id = repos.id;
  repo.user = repos.owner.login;
  repo.name = repos.name;
  repo.description = repos.description;
  repo.url = repos.html_url;
  repo.stars = repos.stargazers_count;

  // mongoose.connection.collection('repos').createIndex({id: 1}, {unique: true, sparse:true});

  // mongoose.connection.collection('repos').insert(repo);

  Repo.create(repos);
}

module.exports.save = save;