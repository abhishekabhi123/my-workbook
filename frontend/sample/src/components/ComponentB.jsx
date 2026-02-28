import { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext } from "./ComponentA";

export default function ComponentB() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1> This is component B </h1>
      <span>hello again {user}</span>
      <ComponentC />
    </div>
  );
}
