import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const userContext = createContext();
export default function ComponentA() {
  const [user, setUser] = useState("Abhi");
  return (
    <div className="box">
      <h1>Component A</h1>
      <span>Hi {user}</span>
      <userContext.Provider value={user}>
        <ComponentB />
      </userContext.Provider>
    </div>
  );
}
