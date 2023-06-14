import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
const fetchAchievementData = async () => {
    try {
      const thisMonthResponse = await axios.get('/api/achievement/thisMonth');
      const thisMonthData = thisMonthResponse.data;
      setThisMonthRate(thisMonthData.rate);
  
      const lastMonthResponse = await axios.get('/api/achievement/lastMonth');
      const lastMonthData = lastMonthResponse.data;
      setLastMonthRate(lastMonthData.rate);
    } catch (error) {
      console.error('Error fetching achievement data:', error);
    }
  };
  const chartData = {
    labels: ['Last Month', 'This Month'],
    datasets: [
      {
        label: 'Achievement Rate',
        data: [lastMonthRate, thisMonthRate],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        <p>This Month's Achievement Rate: {thisMonthRate}%</p>
        <p>Last Month's Achievement Rate: {lastMonthRate}%</p>
      </div>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Calendar;
  