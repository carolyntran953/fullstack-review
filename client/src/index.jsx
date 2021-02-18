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
      repos: [],
      count: 0
    }
    this.getRepos = this.getRepos.bind(this);
  }


  getRepos() {
    axios.get('/repos')
      .then((response) => {
        // console.log(response.data);
        this.setState({
          repos: response.data.docs,
          count: response.data.count
        })
        // console.log(this.state.repos);
      })
      .catch((error) => {
        console.log('client getRepos: ', error);
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
      },
      error: (err) => {
        console.log('client search post: ', err);
        return;
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos} count={this.state.count} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));