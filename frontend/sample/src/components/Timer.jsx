import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = (e, field) => {
    const key = parseInt(e.target.value, 10) || 0;
    if (isNaN(key)) {
      return;
    }
    const currentTimeObj = { ...time };
    currentTimeObj[field] = key;
    currentTimeObj.minute += Math.floor(currentTimeObj.second / 60);
    currentTimeObj.second = currentTimeObj.second % 60;
    currentTimeObj.hour += Math.floor(currentTimeObj.minute / 60);
    currentTimeObj.minute = Math.floor(currentTimeObj.minute % 60);
    setTime(currentTimeObj);
  };

  const handleClick = () => {
    if (
      time.hour.length === 0 &&
      time.minute.length === 0 &&
      time.second.length === 0
    )
      return;

    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime({
      hour: "",
      minute: "",
      second: "",
    });
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          let currentTime = { ...prev };
          currentTime.second--;
          if (currentTime.second < 0) {
            currentTime.minute--;
            currentTime.second = 59;

            if (currentTime.minute < 0) {
              currentTime.hour--;
              currentTime.minute = 59;

              if (currentTime.hour < 0) {
                clearInterval(intervalRef.current);
                // setIsRunning(false);
                return { hour: "", minute: "", second: "" };
              }
            }
          }
          return currentTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div className="main-timer-container">
      <div className="timer-container">
        <input
          disabled={isRunning}
          className="timer-input"
          type="text"
          value={time.hour}
          placeholder="HH"
          onChange={(e) => handleChange(e, "hour")}
        />
        <input
          disabled={isRunning}
          className="timer-input"
          type="text"
          value={time.minute}
          placeholder="MM"
          onChange={(e) => handleChange(e, "minute")}
        />
        <input
          disabled={isRunning}
          className="timer-input"
          type="text"
          value={time.second}
          placeholder="SS"
          onChange={(e) => handleChange(e, "second")}
        />
      </div>

      <div className="timer-controls">
        <button onClick={handleClick}>{isRunning ? "Pause" : "Set"} </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
