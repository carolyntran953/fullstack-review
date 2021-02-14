import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
        <th>RANK</th>
        <th>USER</th>
        <th>REPOSITORY</th>
        <th>DESCRIPTION</th>
        <th>URL</th>
        <th>STARS</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map(repo => repo.rank <= 25 ? <Repo key={repo.id} repo={repo} /> : null)}
      </tbody>
    </table>
  </div>
)

export default RepoList;