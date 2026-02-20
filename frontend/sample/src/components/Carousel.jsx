import { useRef } from "react";
import { useState } from "react";
import data from "../data.json";
import { useEffect } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
      className="car-container"
    >
      <button onClick={handlePrev}> {"<"} </button>
      <img src={data[index].download_url} />
      <button onClick={handleNext}> {">"} </button>
    </div>
  );
}
