import { useContext } from "react";
import { userContext } from "./ComponentA";

export default function ComponentD() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1> This is component D </h1>
      <span>Bye {user}</span>
    </div>
  );
}
