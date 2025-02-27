# react-flat-pagination

말줄임표(`...`) 없는 React 페이지네이션 컴포넌트입니다.

## 소개

`react-flat-pagination`은 React 애플리케이션에서 사용할 수 있는 간단하고 직관적인 페이지네이션 컴포넌트입니다. 이 라이브러리는 다음과 같은 특징을 가지고 있습니다.

- 말줄임표(`...`)를 사용하지 않는 깔끔한 디자인
- 컴포넌트 기반 및 훅 기반 사용 방식 모두 지원
- TypeScript로 작성되어 타입 안정성 제공
- 다양한 페이지 이동 기능 (다음, 이전, 처음, 마지막, 특정 페이지로 이동)
- 사용자 정의 UI 지원

## 설치 방법

[npm](https://npmjs.org/) 또는 [yarn](https://yarnpkg.com)을 사용하여 설치할 수 있습니다.

```bash
# npm 사용
$ npm install --save @cbcruk/react-flat-pagination

# yarn 사용
$ yarn add @cbcruk/react-flat-pagination
```

## 사용 방법

### 컴포넌트 방식

```jsx
import { Pagination } from '@cbcruk/react-flat-pagination';

function MyPagination() {
  return (
    <Pagination total={100} pageCount={10} defaultCurrent={1}>
      {({
        current,
        ranges,
        handleNext,
        handlePrev,
        goTo,
        goToFirst,
        goToLast,
      }) => (
        <div>
          <button onClick={goToFirst} disabled={current === 1}>
            처음
          </button>
          <button onClick={handlePrev} disabled={current === 1}>
            이전
          </button>
          
          {ranges.map(page => (
            <button 
              key={page} 
              onClick={() => goTo(page)}
              style={{ fontWeight: current === page ? 'bold' : 'normal' }}
            >
              {page}
            </button>
          ))}
          
          <button onClick={handleNext} disabled={current === Math.ceil(100/10)}>
            다음
          </button>
          <button onClick={goToLast} disabled={current === Math.ceil(100/10)}>
            마지막
          </button>
        </div>
      )}
    </Pagination>
  );
}
```

### 훅(Hook) 방식

```jsx
import { usePagination } from '@cbcruk/react-flat-pagination';

function MyPagination() {
  const {
    current,
    ranges,
    handleNext,
    handlePrev,
    goTo,
    goToFirst,
    goToLast,
  } = usePagination({
    total: 100,
    pageCount: 10,
    defaultCurrent: 1,
  });

  return (
    <div>
      <button onClick={goToFirst} disabled={current === 1}>
        처음
      </button>
      <button onClick={handlePrev} disabled={current === 1}>
        이전
      </button>
      
      {ranges.map(page => (
        <button 
          key={page} 
          onClick={() => goTo(page)}
          style={{ fontWeight: current === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}
      
      <button onClick={handleNext} disabled={current === Math.ceil(100/10)}>
        다음
      </button>
      <button onClick={goToLast} disabled={current === Math.ceil(100/10)}>
        마지막
      </button>
    </div>
  );
}
```

## API

### Pagination 컴포넌트 Props

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| total | number | - | 총 아이템 수 |
| pageCount | number | 10 | 페이지당 아이템 수 |
| defaultCurrent | number | 1 | 초기 페이지 번호 |
| children | function | - | 렌더 함수 |

### usePagination 훅 옵션

| 옵션 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| total | number | - | 총 아이템 수 |
| pageCount | number | 10 | 페이지당 아이템 수 |
| defaultCurrent | number | 1 | 초기 페이지 번호 |

### 반환값

| 속성 | 타입 | 설명 |
|------|------|------|
| current | number | 현재 페이지 번호 |
| ranges | number[] | 표시할 페이지 번호 배열 |
| handlePrev | function | 이전 페이지로 이동하는 함수 |
| handleNext | function | 다음 페이지로 이동하는 함수 |
| goTo | function | 특정 페이지로 이동하는 함수 |
| goToFirst | function | 첫 페이지로 이동하는 함수 |
| goToLast | function | 마지막 페이지로 이동하는 함수 |