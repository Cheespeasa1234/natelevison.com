# natelevison.com source repository

## What is this?
This is my personal webpage. It is hosted at https://natelevison.com by an Ubuntu service on a machine in my basement. It runs on deno and express.js. 

## Important code structure
Here is the structure of the repository for ambiguous parts. Not every file is included.
* `src/` - the backend Typescript code
    * `routes/` - the routers for the express app
        * `blog.ts` - the blog api
        * `resume.ts` - the resume test api
    * `util/` - utility functions
        * `blogManager.ts` - manages the blog posts and calculates search results
        * `consts.ts` - global constants and global state
        * `htmt.ts` - parses HTML and replaces certain values, and censors certain words
        * `logger.ts` - logs everything
    * `auth.ts` - functions for authentication. unused, except for the resume test
    * `index.ts` - the main script
    * `tests.ts` - the test suite
* `public_html/` - the frontend code
    * `about/` - the about page
    * `blog/` - the blog page
    * `global/` - global components and styles
    * `my_projects/` - the portfolio page

## History
This website used to be hosted on https://cheespeasa1234.github.io. I switched over a few years ago to run on my PC, and then a few months ago I switched to a standalone server. This website is probably the most important coding project I've ever made, maybe even the most important project I've ever made, not just coding.

It's gone through a few redesigns, and multiple backend re-writes. I am constantly trying to improve the site wherever I can.

## Future plans (IN NO PARTICULAR ORDER)
1. Rewrite the frontend in svelte or some other reactive API, and redesign the look
2. Make more interesting stuff
3. Update the projects page
4. Use my new logo redesign