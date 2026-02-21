import { useState } from "react";
import {
  INTERVAL_INCREMENT,
  INTERVAL_SPEED_IN_MS,
  MAX_VALUE,
  MIN_VALUE,
} from "../constants";
import { useEffect } from "react";

export default function Progress() {
  const [progress, setProgress] = useState(MIN_VALUE);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= MAX_VALUE) {
          clearInterval(interval);
        }
        return Math.min(prev + INTERVAL_INCREMENT, MAX_VALUE);
      });
    }, INTERVAL_SPEED_IN_MS);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="main-progress">
      <div
        className="progress"
        style={{ transform: `translateX(${progress - MAX_VALUE}%)` }}
      ></div>
    </div>
  );
}
