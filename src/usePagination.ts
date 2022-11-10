import { useCallback, useState } from 'react'
import { chunk, range } from './utils'
import { Options } from './types'

export function usePagination({
  totalNumber,
  pageSize,
  pageRange = 10,
  pageNumber = 1,
}: Options) {
  const [current, setCurrent] = useState(pageNumber)
  const list = range(Math.ceil(totalNumber / pageSize))
  const chunkCount = totalNumber / pageRange
  const chunked = chunk({ list, count: chunkCount })
  const position = Math.ceil(current / pageRange) - 1
  const pagination = chunked[position]
  const handlePrev = useCallback(() => setCurrent((p) => p - 1), [])
  const handleNext = useCallback(() => setCurrent((p) => p + 1), [])
  const goTo = useCallback((index: number) => setCurrent(index), [])
  const goToFirst = useCallback(() => setCurrent(1), [])
  const goToLast = useCallback(() => setCurrent(list.length), [])

  return {
    pagination,
    current,
    setCurrent,
    handlePrev,
    handleNext,
    goTo,
    goToLast,
    goToFirst,
  }
}
