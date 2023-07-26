# Gatsby

- Gatsby is widely know as Static Site Generator(SSG).
- uses a combination for React and GraphSQL.
- Gatsby call itself a modern site generator.
- It helps to create really fast search engine for secure website.
- It is a complete frontend solutions.

### Static Site Generator

- Generate static HTML pages using a combo of templates, components and meta.
- It helps to generate static HTML pages using templates, components and data.

## Type of websites

1. Static websites

   - static websites is HTML pages that made up with js and css.
   - Pages uploaded to CDN / web host.
   - We need separate request for every different pages to the server.
   - Fresh request for every pages and it makes your website slow down.
   - Generally static websites does not contain dynamic data.

2. Single Page Applications

   - Simple page applications are typically react/vue website.
   - Only a single server request made for the initial HTML page(empty).
   - Everything else (routing and data) is handled by the SPA in the browser.
   - Single server request is help to fast loading of website.
   - All the data and routing is handle from the browser.
   - But the web pages are not SEO friendly (initial request is for a blank html page).
   - Single page applications are easy to update.

3. Server side rendered

   - Pages rendered on the server after every request
   - Server sources data(eg: mongodb) and uses templates render HTML pages.
   - Resulting pages are send back to the browser.
   - Fresh requests needs to made for every page.
   - Server can take time getting data and rendering pages.
   - Content rich html pages back from the server on each request.
   - Server need to query data needed for a requested html pages from the database. that slow down our website little bit.
   - And it helps to SEO.
   - Node and php are working with a templating system like EJS. this means our website is search engine optimized.
   - We get back content rich html page from server. that helps to seo.
   - Need to send individual request for every page rendering.
   - Server can take time getting data and rendering page.

4. Static Site Generator

- Static generated site is a process where our final html pages are compiled at build time not on the server after each request. But at build time before we even deploy the application to the web.

  - Static sites are compiled at build time (before deployment).
  - Gatsby sites/ pages are made using react components.
  - Static pages are then deployed to web.
  - After initial request, the site behaves more like an SPA.

  - Create a html page with react elements and then inside gatsby we could run a build command on our computer, it fetches all of our react components fetches any data that they need and pumbs into them.

- We can use different data sources for our application.
- Create graphql layer using source plugins.
- We can use graphql query for fetching data.

### Gatsby CLI

- The Gatsby CLI is the main tool you use to initialize, build and develop Gatsby sites.
- To use Gatsby CLI you must either:
  1.  Install it globally with `npm install -g gatsby-cli`, where you execute commands with the syntax `gatsby new `
  2.  or, Run commands directly with npx where you execute commands with the syntax `npx gatsby new`.
