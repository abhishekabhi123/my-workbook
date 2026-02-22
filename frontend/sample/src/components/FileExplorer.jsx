import { useState } from "react";

export default function FileExplorer({ data }) {
  const [showChild, setShowChild] = useState(false);

  const handleClick = () => {
    setShowChild(!showChild);
  };

  return (
    <div className="file-container">
      <h5>
        {data.type === "folder" ? "📁" : "📄"}
        <span onClick={handleClick}>{data.name}</span>
      </h5>
      {showChild &&
        data?.children?.map((fileItem, index) => {
          return <FileExplorer data={fileItem} key={index} />;
        })}
    </div>
  );
}
