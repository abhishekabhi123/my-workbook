import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function AutoComplete() {
  const STATE = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
  };
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);
  const cache = useRef({});

  useEffect(() => {
    const abortContrller = new AbortController();
    const { signal } = abortContrller;
    const fetchData = async () => {
      try {
        setStatus(STATE.LOADING);
        if (cache.current[query]) {
          setData(cache.current[query]);
          setStatus(STATE.SUCCESS);
          return;
        }
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          { signal },
        );
        const data = await res.json();
        setData(data.products);
        cache.current[query] = data.products;
        setStatus(STATE.SUCCESS);
      } catch (err) {
        if (err.name !== "AbortError") {
          setStatus(STATE.ERROR);
        }
        setStatus(STATE.ERROR);
        console.log(err);
      }
    };

    let timerId = setTimeout(fetchData, 1000);
    return () => {
      clearTimeout(timerId);
      abortContrller.abort();
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        style={{ width: "60%" }}
      />
      {status === STATE.LOADING && <p>Loading ....</p>}
      {status === STATE.ERROR && <p>Error </p>}
      {status === STATE.SUCCESS && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
