import React from 'react';

const Repo = (props) => (
  <tr>
    <td>add rank</td>
    <td>{props.repo.owner.login}</td>
    <td>{props.repo.name}</td>
    <td>{props.repo.description}</td>
    <td>{props.repo.url}</td>
    <td>{props.repo.stargazers_count}</td>
  </tr>
)

export default Repo;