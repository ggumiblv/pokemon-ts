import { useState } from 'react';

type PaginationProps = {
  pagesCount: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ pagesCount, page, setPage }: PaginationProps) => {
  const visibleCount = 3;
  const [start, setStart] = useState(0);

  const end = Math.min(start + visibleCount, pagesCount);

  const canGoLeft = start > 0;
  const canGoRight = end < pagesCount;

  return (
    <div className="home__pagination">
      <button disabled={!canGoLeft} onClick={() => setStart(start - visibleCount)}>
        ←
      </button>
      {Array.from({ length: end - start }, (_, i) => {
        const k = start + i;

        return (
          <button
            key={k}
            onClick={() => setPage(k)}
            className={`home__pagination-item ${k === page ? 'home__pagination-item--active' : ''}`}
          >
            {k + 1}
          </button>
        );
      })}
      <button disabled={!canGoRight} onClick={() => setStart(start + visibleCount)}>
        →
      </button>
    </div>
  );
};

export default Pagination;
