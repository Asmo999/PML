import React from 'react';

const CircularProgress = ({ value, max }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress =  value / max;
  const strokeDashoffset = circumference * (1 - progress);
  console.log(progress)
  console.log(circumference)
  console.log(strokeDashoffset)
  return (
    <svg width="120" height="120">
      <circle
        stroke="lightgray"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        stroke="#10084F"
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={radius}
        cx="60"
        cy="60"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
};

export default CircularProgress;
