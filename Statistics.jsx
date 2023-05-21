// Statistics.js

import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {data.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
