import React, { useEffect, useState } from "react";

const CountdownTimer = ({ timeEnd }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(timeEnd * 1000) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  timerComponents.push(
    <span key="days">
      {timeLeft.days} day{timeLeft.days > 1 ? "s" : ""}{" "}
    </span>
  );
  timerComponents.push(
    <span key="hours">
      {timeLeft.hours} hour{timeLeft.hours > 1 ? "s" : ""}{" "}
    </span>
  );
  timerComponents.push(
    <span key="minutes">
      {timeLeft.minutes} minute{timeLeft.minutes > 1 ? "s" : ""}{" "}
    </span>
  );
  timerComponents.push(
    <span key="seconds">
      {timeLeft.seconds} second{timeLeft.seconds > 1 ? "s" : ""}
    </span>
  );

  return (
    <div>
      {timerComponents.length ? (
        <div>Time left: {timerComponents}</div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
