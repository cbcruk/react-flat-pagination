# react-flat-pagination

말줄임표(`...`) 없이 단순하게 페이지를 표시하는 React 페이지네이션 라이브러리입니다.

[Demo](https://cbcruk.github.io/react-flat-pagination/)

## Features

- **Flat UI** - 말줄임표 없이 현재 범위의 페이지만 표시
- **Headless** - 로직만 제공, UI는 자유롭게 구성
- **Flexible** - 컴포넌트 또는 훅으로 사용 가능
- **TypeScript** - 완전한 타입 지원
- **Lightweight** - React 외 의존성 없음

## Installation

```bash
# npm
npm install react-flat-pagination

# pnpm
pnpm add react-flat-pagination
```

## Usage

### Pagination Component

render-props 패턴으로 UI를 자유롭게 구성할 수 있습니다.

```tsx
import { Pagination } from 'react-flat-pagination'

function App() {
  return (
    <Pagination total={100} pageCount={10} defaultCurrent={1}>
      {({
        current,
        ranges,
        isFirst,
        isLast,
        handlePrev,
        handleNext,
        goTo,
        goToFirst,
        goToLast,
      }) => (
        <nav>
          <button disabled={isFirst} onClick={goToFirst}>
            First
          </button>
          <button disabled={isFirst} onClick={handlePrev}>
            Prev
          </button>
          {ranges.map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              aria-current={page === current ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
          <button disabled={isLast} onClick={handleNext}>
            Next
          </button>
          <button disabled={isLast} onClick={goToLast}>
            Last
          </button>
        </nav>
      )}
    </Pagination>
  )
}
```

### usePagination Hook

컴포넌트 없이 훅만 사용할 수도 있습니다.

```tsx
import { usePagination } from 'react-flat-pagination'

function App() {
  const pagination = usePagination({
    total: 100,
    pageCount: 10,
    defaultCurrent: 1,
  })

  return (
    <nav>
      {pagination.ranges.map((page) => (
        <button key={page} onClick={() => pagination.goTo(page)}>
          {page}
        </button>
      ))}
    </nav>
  )
}
```

## API

### Options

| Name             | Type     | Default    | Description                |
| ---------------- | -------- | ---------- | -------------------------- |
| `total`          | `number` | _required_ | 전체 아이템 수             |
| `pageCount`      | `number` | `10`       | 한 범위에 표시할 페이지 수 |
| `defaultCurrent` | `number` | `1`        | 초기 페이지 번호           |

### Return Values

| Name         | Type                     | Description             |
| ------------ | ------------------------ | ----------------------- |
| `current`    | `number`                 | 현재 페이지 번호        |
| `ranges`     | `number[]`               | 표시할 페이지 번호 배열 |
| `isFirst`    | `boolean`                | 첫 페이지 여부          |
| `isLast`     | `boolean`                | 마지막 페이지 여부      |
| `handlePrev` | `() => void`             | 이전 페이지로 이동      |
| `handleNext` | `() => void`             | 다음 페이지로 이동      |
| `goTo`       | `(page: number) => void` | 특정 페이지로 이동      |
| `goToFirst`  | `() => void`             | 첫 페이지로 이동        |
| `goToLast`   | `() => void`             | 마지막 페이지로 이동    |

## Example

100개의 아이템을 10개씩 표시할 때:

```
총 페이지: 10
현재 페이지 1일 때 ranges: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

120개의 아이템을 10개씩 표시하고, 현재 페이지가 12일 때:

```
총 페이지: 12
ranges: [11, 12]
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Preview with Ladle
pnpm ladle

# Build
pnpm build
```

## License

MIT
