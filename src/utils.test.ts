import { expect, test } from 'vitest'
import { range, chunk } from './utils'

test('range', () => {
  expect(range(10)).toMatchInlineSnapshot(`
    [
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
    ]
  `)
})

test('chunk', () => {
  expect(chunk({ list: range(10), count: 3 })).toMatchInlineSnapshot(
    `
    [
      [
        1,
        2,
        3,
      ],
      [
        4,
        5,
        6,
      ],
      [
        7,
        8,
        9,
      ],
      [
        10,
      ],
    ]
  `
  )
})
