export default function Pagination({ pageNo, setPageNo }) {
  const prev3array = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index)
    .filter((item) => item > 0)
    .reverse();
  const next4array = Array.from({ length: 4 }, (_, index) => pageNo + index);
  const mergedArray = [...prev3array, ...next4array];

  const handleIncrement = () => {
    setPageNo(pageNo + 1);
  };

  const handleDecrement = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="page-container">
      {pageNo > 1 ? (
        <div onClick={handleDecrement} className="pages">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {mergedArray.map((page) => {
        return (
          <div
            onClick={() => setPageNo(page)}
            className={`${pageNo === page ? "active" : "pages"}`}
          >
            {page}
          </div>
        );
      })}

      <div onClick={handleIncrement} className="pages">
        {">"}
      </div>
    </div>
  );
}
