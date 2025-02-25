import { usePagination } from './usePagination'

export type Options = {
  total: number
  pageCount?: number
  defaultCurrent?: number
}

export type PaginationProps = {
  children: (result: ReturnType<typeof usePagination>) => JSX.Element
} & Options
