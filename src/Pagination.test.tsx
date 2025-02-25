import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'

test('Pagination', async () => {
  const { container } = render(
    <Pagination total={100} pageCount={10} defaultCurrent={1}>
      {({
        current,
        ranges,
        handleNext,
        handlePrev,
        goTo,
        goToFirst,
        goToLast,
      }) => {
        return (
          <div>
            <div data-testid="current">{current}</div>
            <div>
              <button
                data-testid="first"
                onClick={() => {
                  goToFirst()
                }}
              >
                first
              </button>
              <button data-testid="prev" onClick={handlePrev}>
                prev
              </button>
              <div>
                {ranges.map((page) => {
                  return (
                    <a
                      key={page}
                      data-active={page === current}
                      data-testid={`item-${page}`}
                      onClick={() => {
                        goTo(page)
                      }}
                    >
                      {page}
                    </a>
                  )
                })}
              </div>
              <button data-testid="next" onClick={handleNext}>
                next
              </button>
              <button data-testid="last" onClick={goToLast}>
                last
              </button>
            </div>
          </div>
        )
      }}
    </Pagination>
  )
  expect(container).toMatchSnapshot()

  await userEvent.click(screen.getByTestId('next'))
  expect(screen.getByTestId('current')).toHaveTextContent('2')

  await userEvent.click(screen.getByTestId('first'))
  expect(screen.getByTestId('current')).toHaveTextContent('1')

  await userEvent.click(screen.getByTestId('item-2'))
  expect(screen.getByTestId('current')).toHaveTextContent('2')

  await userEvent.click(screen.getByTestId('last'))
  expect(screen.getByTestId('current')).toHaveTextContent('10')

  await userEvent.click(screen.getByTestId('first'))
  expect(screen.getByTestId('current')).toHaveTextContent('1')
})
