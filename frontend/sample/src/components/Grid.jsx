import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Grid() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false)),
  );

  const queue = useRef([]);
  const handleClick = (rowIdx, colIdx, flag) => {
    setGrid((prev) => {
      const gridDeepCopy = prev.map((item) => [...item]);
      gridDeepCopy[rowIdx][colIdx] = flag;
      if (flag) queue.current.push([rowIdx, colIdx]);
      return gridDeepCopy;
    });
  };

  useEffect(() => {
    if (queue.current.length === 9) {
      queue.current.forEach(([rowIdx, colIdx], index) => {
        setTimeout(
          () => {
            handleClick(rowIdx, colIdx, false);
          },
          1000 * (index + 1),
        );
      });
      queue.current = [];
    }
  }, [grid]);

  return (
    <div className="grid-container">
      {grid.map((row, rowIdx) => {
        return row.map((cell, cellIdx) => {
          return (
            <div
              className={`cell ${cell ? "active" : ""}`}
              key={`${rowIdx} - ${cellIdx}`}
              onClick={() => {
                handleClick(rowIdx, cellIdx, true);
              }}
            ></div>
          );
        });
      })}
    </div>
  );
}
