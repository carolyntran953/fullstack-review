import React from 'react';

const Repo = (props) => (
  <tr>
    {/* <td>{props.repo.rank}</td> */}
    <td>{props.repo.user}</td>
    <td><a href={props.repo.url} target='_blank'>{props.repo.name}</a></td>
    <td>{props.repo.description}</td>
    <td>{props.repo.stars}</td>
  </tr>
)

export default Repo;