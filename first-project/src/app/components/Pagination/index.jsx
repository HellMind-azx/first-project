'use client';
import { useState } from "react";

export default function Pagination() {
  const data = Array.from({ length: 50 }, (_, i) => `Элемент ${i + 1}`);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              padding: "5px 10px",
              fontWeight: page === currentPage ? "bold" : "normal",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
