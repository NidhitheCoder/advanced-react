# React query
- React query is a library for fetching data in a react application.

## client state
- Client state is persisted in your app memory and accessing or updating it is synchronous.

## server state
- Persisted remotely and requires asynchronous apis for fetching or updating.
- Has a shared ownership
- Data can be updated by someonewithout your knowledge.
- UI data may not be sync with the remote data.
- Deals with caching, deduping mutliple requests for the same data, updating stale data in the background, performance optimization and lazy loading.

## Advantages
- Helps to reduce the lines of code and easy to understand.
- Easy to maintain and building new features in applicaiton.
- Direct impact on end users and helps to faster and more responsive than ever before.
- Save on bandwidth and increase memory performance.

# Installation
- Create a new react app with the command `npx create-react-app react-query-demo`.
- To install jason-server in your project use `yarn add json-server` command.cd re
  - `npm run serve-json` for run json server.
- To install react query use `yarn add react-query` command.
  - At the top of component tree(mostly app.js) we need to add react query provider and provide client to the application.

  - StaleTime
    - The time in milliseconds after data is considered stale. If set to Infinity, the data will never be considered stale.
      Default stealTime is 0 second.
  - refetchOnMount hae a string value 'always' and boolean values.
  - If any api call getting failed with react query will try 3 times and till it is return error then return error message.