import { memo, useState } from "react";

function Square({ color }) {
  console.log("rerendered child");
  return (
    <div
      style={{ width: "4rem", height: "4rem", background: `${color}` }}
    ></div>
  );
}
const MemoSquare = memo(Square);

export default function Memos() {
  console.log("rerendered parent");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <button onClick={handleClick}>Increment</button>
      </div>
      <span style={{ margin: "10rem" }}>{count}</span>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change color
      </button>
      <MemoSquare color={color} />
    </>
  );
}

console.log(Memos);
