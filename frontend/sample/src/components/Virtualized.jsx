import { useState } from "react";

export default function Virtualized({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const displayList = list.slice(indices[0], indices[1] + 1);

  return (
    <div
      className="vir-container"
      style={{
        height: height,
        width: width,
        overflow: "auto",
        background: "coral",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {displayList.map((list, index) => {
          return (
            <div
              key={indices[0] + index}
              style={{
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                height: itemHeight,
                width: "100%",
                background: "coral",
                textAlign: "center",
                color: "whitesmoke",
                borderTop: "5px solid gray",
              }}
            >
              {list + "item"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
