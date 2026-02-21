import { useEffect } from "react";

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 },
    );

    const lastImage = document.querySelector(".images:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item) => {
        return (
          <img
            className="images"
            key={item.id}
            src={item.download_url}
            style={{
              height: "200px",
              width: "200px",
              margin: "auto",
              padding: "2rem",
              borderRadius: "3rem",
              objectFit: "cover",
            }}
          />
        );
      })}
    </div>
  );
}
