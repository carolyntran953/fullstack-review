import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.count} repos.
    <table>
      <thead>
        <tr>
        <th>USER</th>
        <th>REPOSITORY</th>
        <th>DESCRIPTION</th>
        <th>STARS</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map(repo => <Repo key={repo.id} repo={repo} />)}
      </tbody>
    </table>
  </div>
)

export default RepoList;