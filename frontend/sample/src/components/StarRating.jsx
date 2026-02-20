import { useState } from "react";

export default function StarRating({ starLength = 5 }) {
  const [stars, setStars] = useState(null);
  const [hover, setHover] = useState(0);

  const starArray = new Array(starLength).fill(0);

  return (
    <div className="star-container">
      {starArray.map((star, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              setStars(index + 1);
            }}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            style={{ fontSize: "10rem" }}
            className={index < (hover || stars) ? "gold" : ""}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
