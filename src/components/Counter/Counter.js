import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Counter = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`10/23/${year} 09:00:00`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]}
        <span className={styles.thin}>{interval}</span>{' '}
      </span>
    );
  });

  return (
    <div className={styles.counterBackground}>
      <h1 className={styles.counterText}>
        HackNight <span className={styles.thin}>starts in </span>
        {timerComponents.length ? timerComponents : <span>Event Started!</span>}
      </h1>
    </div>
  );
};

export default Counter;
