# react-stacked-elements ![Build Status][actions-img]

> Toggle the visibility of elements without causing a layout shift

This package uses CSS Grid to place items at the same column and row, then toggles their visibility based on the `selectedIndex` property.

## Install

```shell
npm install react-stacked-elements
```

## Usage

```tsx
<StackedElements selectedIndex={isChecked ? 0 : 1}>
  <span>Absolutely</span>
  <span>No</span>
</StackedElements>
```

## Demos

Check them out here <https://vestride.github.io/react-stacked-elements/>

[actions-img]: https://github.com/Vestride/react-stacked-elements/actions/workflows/build.yml/badge.svg?branch=main
