### UseEffect

- UseEffect runs only after the component rendered.

- Once you update states in react it's going to rerender the entire component.
- useMemo hook helps to resolve rendering component on every time.

### UseMemo

- Here, memo stance for memoization, which means we caching a value, so we don't want to recompute a value every single time.
- Use useMemo on where you only get performance benefits in code otherwise it will take additional memory usage.
- Second use case for useMemo hook is referential equality
