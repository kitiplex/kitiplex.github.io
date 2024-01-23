import React from 'react';

const VerticalTable = ({data}) => (
  <table>
    {data.map(row => (
      <tr>
        <th style={{minWidth: '180px'}}>{row[0]}</th>
        <td style={{width: '100%'}}>{row[1]}</td>
      </tr>
    ))}
  </table>
);

export default VerticalTable;
