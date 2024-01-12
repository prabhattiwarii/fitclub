import React, { useState, useEffect } from 'react';

const NumberCounter = ({ start, end, stop, delay, prefix }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let timer;

    const incrementCount = () => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount <= end) {
          return newCount;
        }
        return prevCount;
      });
    };

    if (start < end && (!stop || count < stop)) {
      timer = setInterval(incrementCount, delay * 2);
    }

    return () => {
      clearInterval(timer);
    };
  }, [start, end, stop, delay, count]);

  return <span>{prefix}{count}</span>;
};

export default NumberCounter;
