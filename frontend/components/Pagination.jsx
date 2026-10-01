function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;
  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage((currPage) => currPage - 1)}
      >
        Previous
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => setPage((currPage) => currPage + 1)}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
