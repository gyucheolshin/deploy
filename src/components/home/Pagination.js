import React from "react";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-1/2 ml-20">
      <nav>
        <ul className="flex justify-center">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => setPage(number)}
                style={page === number ? { color: "#7a2b8" } : null}
                className="cursor-pointer mr-5"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

// <div>
//   <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//     &lt;
//   </button>
//   {Array(numPages)
//     .fill()
//     .map((_, i) => (
//       <button
//         key={i + 1}
//         onClick={() => setPage(i + 1)}
//         aria-current={page === i + 1 ? "page" : null}
//       >
//         {i + 1}
//       </button>
//     ))}
//   <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
//     &gt;
//   </button>
// </div>
