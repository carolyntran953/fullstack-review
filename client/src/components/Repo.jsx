import React from 'react';

const Repo = (props) => (
  <tr>
    <td>{props.repo.rank}</td>
    <td>{props.repo.owner.login}</td>
    <td><a href={props.repo.html_url} target='_blank'>{props.repo.name}</a></td>
    <td>{props.repo.description}</td>
    <td>{props.repo.stargazers_count}</td>
  </tr>
)

export default Repo;