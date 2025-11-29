import styles from '../../styles/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  // Generate page numbers with ellipsis
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>

      <div className={styles.numbers}>
        {pages.map((page, index) =>
          page === '...' ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`${styles.number} ${page === currentPage ? styles.active : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;