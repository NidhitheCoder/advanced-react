# advanced-react


## Babel

- Babel is a javascript compiler that convert modern javascript code into a version compatible with all browsers. Babel enables react developers to use the latest javascript syntax in their component.

## Monorepo

- Monorepo is a single repository containing several different projects, with well defined relationships.

### Nx for monorepo

- steps
  1. Setup initial project
    `npx create-nx-workspace@latest <project_name>` and choose option `integrated` for generate workspace include multiple apps and libs
  2. Generate Node and Next application
    Add Nx dependency for using node js in monorepo using CLI
    `yarn add -D @nrwl/node` or `yarn add -D @nrwl/next` install and generate node and next app
  3. Generate reusable components
