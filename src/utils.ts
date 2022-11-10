export function range(length: number) {
  return Array.from({ length }).map((_, i) => i + 1)
}

export function chunk({ list, count }: { list: number[]; count: number }) {
  const length = Math.ceil(list.length / count)

  return Array.from({ length }).map((_, i) => {
    const start = i * count
    const end = (i + 1) * count
    const result = list.slice(start, end)

    return result
  })
}
