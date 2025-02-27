import { useState } from 'react'
import { Options } from './types'

export function usePagination({
  defaultCurrent = 1,
  total,
  pageCount = 10,
}: Options) {
  const [current, setCurrent] = useState(defaultCurrent)

  const totalPages = Math.ceil(total / pageCount)
  const start = Math.floor((current - 1) / pageCount) * pageCount + 1
  const end = Math.min(start + pageCount - 1, totalPages)
  const ranges = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const isFirst = current === 1
  const isLast = current === totalPages

  const handlePrev = () => setCurrent((p) => p - 1)
  const handleNext = () => setCurrent((p) => p + 1)
  const goTo = (index: number) => setCurrent(index)
  const goToFirst = () => setCurrent(1)
  const goToLast = () => setCurrent(totalPages)

  return {
    current,
    ranges,
    isFirst,
    isLast,
    handlePrev,
    handleNext,
    goTo,
    goToLast,
    goToFirst,
  }
}
