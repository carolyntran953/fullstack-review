const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
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

  const filter = { id: repos.id };
  const options = {upsert: true, new: true }

  Repo.findOneAndUpdate(filter, repo, options)
  .then((doc) => {
    console.log(doc);
    return doc;
  })
  .catch((err) => {
    console.log('save: ' + err);
    return;
  });
}

module.exports.save = save;