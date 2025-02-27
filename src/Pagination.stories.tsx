import type { Story } from '@ladle/react'
import { Pagination } from './Pagination'

export const PaginationStory: Story = () => (
  <Pagination total={100} pageCount={10} defaultCurrent={1}>
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
    }) => {
      return (
        <div>
          <div>{current}</div>
          <div>
            <button
              disabled={isFirst}
              onClick={() => {
                goToFirst()
              }}
            >
              first
            </button>
            <button disabled={isFirst} onClick={handlePrev}>
              prev
            </button>
            <div>
              {ranges.map((page) => {
                return (
                  <a
                    key={page}
                    data-active={page === current}
                    style={{
                      fontWeight: page === current ? 'bold' : 'normal',
                    }}
                    onClick={() => {
                      goTo(page)
                    }}
                  >
                    {page}
                  </a>
                )
              })}
            </div>
            <button disabled={isLast} onClick={handleNext}>
              next
            </button>
            <button disabled={isLast} onClick={goToLast}>
              last
            </button>
          </div>
        </div>
      )
    }}
  </Pagination>
)
