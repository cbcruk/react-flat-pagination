import { usePagination } from './usePagination'

export type Options = {
  totalNumber: number
  pageSize: number
  pageRange?: number
  pageNumber?: number
}

export type PaginationProps = {
  children: (result: ReturnType<typeof usePagination>) => JSX.Element
} & Options
