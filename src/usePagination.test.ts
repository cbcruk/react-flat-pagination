import { expect, test } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { usePagination } from './usePagination'

test('usePagination', () => {
  const { result } = renderHook(() =>
    usePagination({
      total: 120,
    })
  )

  expect(result.current).toMatchInlineSnapshot(`
    {
      "current": 1,
      "goTo": [Function],
      "goToFirst": [Function],
      "goToLast": [Function],
      "handleNext": [Function],
      "handlePrev": [Function],
      "isFirst": true,
      "isLast": false,
      "ranges": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ],
    }
  `)

  result.current.goTo(3)
  expect(result.current.current).toEqual(3)

  result.current.goToFirst()
  expect(result.current.current).toEqual(1)

  result.current.handleNext()
  expect(result.current.current).toEqual(2)

  result.current.handlePrev()
  expect(result.current.current).toEqual(1)

  result.current.goToLast()
  expect(result.current.current).toEqual(12)
  expect(result.current).toMatchInlineSnapshot(`
    {
      "current": 12,
      "goTo": [Function],
      "goToFirst": [Function],
      "goToLast": [Function],
      "handleNext": [Function],
      "handlePrev": [Function],
      "isFirst": false,
      "isLast": true,
      "ranges": [
        11,
        12,
      ],
    }
  `)
})
