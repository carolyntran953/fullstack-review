import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.getRepos = this.getRepos.bind(this);
  }


  getRepos() {
    axios.get('/repos')
      .then((response) => {
        // console.log(response);
        this.setState({
          repos: response.data
        })
        console.log(this.state.repos);
      })
      .catch((error) => {
        console.log('componentDidMount: ' + error);
      })
  }

  componentDidMount() {
    this.getRepos();
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { user: term },
      success: (result) => {
        this.getRepos();
        // let updatedRepos = [...this.state.repos, ...result].sort((a, b) => b.stargazers_count - a.stargazers_count);
        // this.setState({
        //   repos: updatedRepos.map(repo => Object.assign(repo, { rank: updatedRepos.indexOf(repo) + 1 }))
        // });
        // this.state.repos.forEach((repo, i) => {
        //   repo.rank = i + 1;
        // });
      },
      error: (err) => {
        console.log('search error: ' + err);
        return;
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));