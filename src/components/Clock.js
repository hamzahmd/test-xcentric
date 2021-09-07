import React, { useState } from 'react';

const Clock = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const dayNumber = currentDate.getDay();
  // const currentTime = currentDate.getTime();
  // let [seconds, setSeconds] = useState(0);
  let seconds = 0;
  if (seconds < 60) {
    setTimeout(() => {
      seconds++;
    }, 1000);
  }
  return (
    <>
      <h2>{days[dayNumber]}</h2>
      <h1>{seconds}</h1>
    </>
  );
};

export default Clock;
