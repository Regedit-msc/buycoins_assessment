# Search

## Tooling
- Create React App
- Typescript
- styled-components
- momentjs
- notistack
- Apollo Client

## Overview

Search through list of items with filters and search by criteria.

## Description

It all begins with the `onChange` event fired when the input changes. There is a local state `filterText` exposed to the filter component after passing through a `useMemo` hook to prevent unnecessary rebuilds when the text doesn't change. The api( GQL ) request is made in the `useEffect` within the `IIFE`. Previously cached `data` is set on state if any (P.S data from localStorage). The `filterText` is then processed by another `useMemo` hook to  get a list of items of type ```
T extends {
    date?: string;
    id?: string
}``` that pass the filtering criteria  i.e `searchOnly` field and  actual `filter`. Finally it is processed by the last `useMemo` to reduce the array of type ```
T extends {
    date?: string;
    id?: string
}``` to an object with `humanReadableDates`. It is then rendered to the browser.

## Shortcuts
- None

The api is a simple graphql api written in node:
[API DOCS](https://helllicarrier.herokuapp.com/graphql)
