import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
        <th>USER</th>
        <th>REPOSITORY</th>
        <th>DESCRIPTION</th>
        <th>URL</th>
        <th>STARS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.repos.id}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default RepoList;