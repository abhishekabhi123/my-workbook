import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";

export default function Posts() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [pageNo]);

  return (
    <div className="main-post-container">
      <div className="post-container">
        {data.map((post) => {
          return <img key={post.download_url} src={post.download_url} />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}
