# advanced-react

## Babel

- Babel is a javascript compiler that convert modern javascript code into a version compatible with all browsers. Babel enables react developers to use the latest javascript syntax in their component.

## Monorepo

- Monorepo is a single repository containing several different projects, with well defined relationships.
- Tools for creating monorepos are Bazel, Gradle build tool, Lage, Learna, Moon, Nx, Pants, Rush and Turbo repo.

### Nx for monorepo

- steps

  1. Setup initial project
     - `npx create-nx-workspace@latest <project_name>` and choose option `integrated` for generate workspace include multiple apps and libs.
  2. Generate Node and Next application

     - Add Nx dependency for using node js in monorepo using CLI.
     - `yarn add -D @nrwl/node` or `yarn add -D @nrwl/next` install and generate node and next app.
     - Generate node & react application
       -> You can input the name of app on the syntax {{project_name}}
       -> `nx g @nrwl/node:application {{project_name}}`
       -> `nx g @nrwl/next:application {{project_name}}`

  3. Generate reusable components

  - `yarn add -D @nx/react` - Install Nx for react libs
  - `nx g @nx/react:lib {{lib name}}` - Generate reusable component.

- How to run the application
  1. `nx serve api - watch` - for run api
  2. `nx serve client - watch` - for run client application
