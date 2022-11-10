# react-flat-pagination

말줄임표(`...`) 없는 Pagination

## Installation

[npm](https://npmjs.org/) 또는 [yarn](https://yarnpkg.com)을 선택할 수 있습니다:

```
$ npm install --save @cbcruk/react-flat-pagination
$ yarn add @cbcruk/react-flat-pagination
```

## Examples

### components

```jsx
<Pagination totalNumber={100} pageSize={10}>
  {({
    current,
    pagination,
    handleNext,
    handlePrev,
    goTo,
    goToFirst,
    goToLast,
  }) => {
    return null
  }}
</Pagination>
```

## hooks

```js
const {
  current,
  goTo,
  goToFirst,
  goToLast,
  handleNext,
  handlePrev,
  pagination,
  setCurrent,
} = usePagination({
  totalNumber: 100,
  pageSize: 10,
})
```
