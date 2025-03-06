# react-flat-pagination

## 소개

말줄임표(`...`) 없는 React 페이지네이션 컴포넌트입니다.

이 프로젝트는 리액트 애플리케이션을 위한 유연하고 사용하기 쉬운 페이지네이션 컴포넌트를 제공합니다. `Pagination` 컴포넌트와 페이지네이션 로직을 관리하기 위한 `usePagination` 훅을 포함하고 있습니다.

## 설치

```bash
pnpm install
```

## 사용법

### Pagination 컴포넌트

`Pagination` 컴포넌트는 페이지네이션 컨트롤을 렌더링하는 데 사용됩니다. `total`, `pageCount`, `defaultCurrent`를 props로 필요로 합니다.

예시:

```tsx
import { Pagination } from '@cbcruk/react-flat-pagination'

function App() {
  return (
    <Pagination total={100} pageCount={10} defaultCurrent={1}>
      {({
        current,
        ranges,
        isFirst,
        isLast,
        handleNext,
        handlePrev,
        goTo,
        goToFirst,
        goToLast,
      }) => (
        <div>
          <div>{current}</div>
          <button disabled={isFirst} onClick={goToFirst}>
            처음
          </button>
          <button disabled={isFirst} onClick={handlePrev}>
            이전
          </button>
          {ranges.map((page) => (
            <button key={page} onClick={() => goTo(page)}>
              {page}
            </button>
          ))}
          <button disabled={isLast} onClick={handleNext}>
            다음
          </button>
          <button disabled={isLast} onClick={goToLast}>
            마지막
          </button>
        </div>
      )}
    </Pagination>
  )
}
```

### usePagination

`usePagination` 훅은 페이지네이션 로직을 제공하며, `Pagination` 컴포넌트와 독립적으로 사용할 수 있습니다.

```tsx
import { usePagination } from '@cbcruk/react-flat-pagination'

const {
  current,
  ranges,
  isFirst,
  isLast,
  handleNext,
  handlePrev,
  goTo,
  goToFirst,
  goToLast,
} = usePagination({
  total: 100,
  pageCount: 10,
  defaultCurrent: 1,
})
```

## 테스트

```sh
pnpm test
```

## 미리보기

컴포넌트 스토리를 보려면 [Ladle](https://ladle.dev/)과 같은 도구를 사용할 수 있습니다.

```sh
pnpm ladle
```
