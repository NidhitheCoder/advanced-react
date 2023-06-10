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

