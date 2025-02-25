import { PaginationProps } from './types'
import { usePagination } from './usePagination'

export function Pagination({
  total,
  pageCount,
  defaultCurrent = 1,
  children,
}: PaginationProps) {
  const result = usePagination({
    total,
    pageCount,
    defaultCurrent,
  })

  return children(result)
}
