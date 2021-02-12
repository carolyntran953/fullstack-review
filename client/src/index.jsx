import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { user: term },
      success: (result) => {
        console.log('post request success');
        this.setState({
          repos: result.repos
        });
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
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <table>
        <tr>
          <th>ID</th>
          <th>OWNER</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>URL</th>
          <th>#STARS</th>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </tr>
      </table>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));