import { PaginationProps } from './types'
import { usePagination } from './usePagination'

export function Pagination({
  totalNumber,
  pageSize,
  pageNumber = 1,
  children,
}: PaginationProps) {
  const result = usePagination({ totalNumber, pageSize, pageNumber })

  return children(result)
}
