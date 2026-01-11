import type { Story } from '@ladle/react'
import { Pagination } from './Pagination'
import { usePagination } from './usePagination'
import type { ComponentProps } from 'react'

type PaginationStoryProps = ComponentProps<typeof Pagination>

const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    padding: '20px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  button: {
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  pageButton: {
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    minWidth: '40px',
  },
  activeButton: {
    padding: '8px 12px',
    border: '1px solid #0070f3',
    borderRadius: '4px',
    background: '#0070f3',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    minWidth: '40px',
  },
  disabledButton: {
    padding: '8px 12px',
    border: '1px solid #eee',
    borderRadius: '4px',
    background: '#f5f5f5',
    color: '#999',
    cursor: 'not-allowed',
    fontSize: '14px',
  },
  info: {
    marginBottom: '16px',
    fontSize: '14px',
    color: '#666',
  },
}

export const Basic: Story<PaginationStoryProps> = (props) => (
  <div style={styles.container}>
    <Pagination {...props}>
      {({
        current,
        ranges,
        isFirst,
        isLast,
        handleNext,
        handlePrev,
        goTo,
        goToFirst,
        goToLast,
      }) => (
        <>
          <div style={styles.info}>
            Current: <strong>{current}</strong>
          </div>
          <nav style={styles.nav}>
            <button
              style={isFirst ? styles.disabledButton : styles.button}
              disabled={isFirst}
              onClick={goToFirst}
            >
              First
            </button>
            <button
              style={isFirst ? styles.disabledButton : styles.button}
              disabled={isFirst}
              onClick={handlePrev}
            >
              Prev
            </button>
            {ranges.map((page) => (
              <button
                key={page}
                style={page === current ? styles.activeButton : styles.pageButton}
                onClick={() => goTo(page)}
              >
                {page}
              </button>
            ))}
            <button
              style={isLast ? styles.disabledButton : styles.button}
              disabled={isLast}
              onClick={handleNext}
            >
              Next
            </button>
            <button
              style={isLast ? styles.disabledButton : styles.button}
              disabled={isLast}
              onClick={goToLast}
            >
              Last
            </button>
          </nav>
        </>
      )}
    </Pagination>
  </div>
)

Basic.args = {
  total: 100,
  pageCount: 10,
  defaultCurrent: 1,
}

export const WithHook: Story = () => {
  const { current, ranges, isFirst, isLast, handleNext, handlePrev, goTo } =
    usePagination({
      total: 50,
      pageCount: 5,
      defaultCurrent: 1,
    })

  return (
    <div style={styles.container}>
      <div style={styles.info}>
        Using <code>usePagination</code> hook directly
      </div>
      <div style={styles.info}>
        Current: <strong>{current}</strong> / Total Pages: <strong>10</strong>
      </div>
      <nav style={styles.nav}>
        <button
          style={isFirst ? styles.disabledButton : styles.button}
          disabled={isFirst}
          onClick={handlePrev}
        >
          Prev
        </button>
        {ranges.map((page) => (
          <button
            key={page}
            style={page === current ? styles.activeButton : styles.pageButton}
            onClick={() => goTo(page)}
          >
            {page}
          </button>
        ))}
        <button
          style={isLast ? styles.disabledButton : styles.button}
          disabled={isLast}
          onClick={handleNext}
        >
          Next
        </button>
      </nav>
    </div>
  )
}

export const ManyPages: Story = () => (
  <div style={styles.container}>
    <div style={styles.info}>
      Example with 500 items (50 pages, showing 10 per range)
    </div>
    <Pagination total={500} pageCount={10} defaultCurrent={25}>
      {({
        current,
        ranges,
        isFirst,
        isLast,
        handleNext,
        handlePrev,
        goTo,
        goToFirst,
        goToLast,
      }) => (
        <>
          <div style={styles.info}>
            Current: <strong>{current}</strong> / Total Pages: <strong>50</strong>
          </div>
          <nav style={styles.nav}>
            <button
              style={isFirst ? styles.disabledButton : styles.button}
              disabled={isFirst}
              onClick={goToFirst}
            >
              First
            </button>
            <button
              style={isFirst ? styles.disabledButton : styles.button}
              disabled={isFirst}
              onClick={handlePrev}
            >
              Prev
            </button>
            {ranges.map((page) => (
              <button
                key={page}
                style={page === current ? styles.activeButton : styles.pageButton}
                onClick={() => goTo(page)}
              >
                {page}
              </button>
            ))}
            <button
              style={isLast ? styles.disabledButton : styles.button}
              disabled={isLast}
              onClick={handleNext}
            >
              Next
            </button>
            <button
              style={isLast ? styles.disabledButton : styles.button}
              disabled={isLast}
              onClick={goToLast}
            >
              Last
            </button>
          </nav>
        </>
      )}
    </Pagination>
  </div>
)
