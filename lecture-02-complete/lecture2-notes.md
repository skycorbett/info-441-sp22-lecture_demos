<h4>Lecture 1 Review</h4>

Client Code vs. Server Code

Installed:

NodeJS

Visual Studio Code (What we're using right now)

npm init

How to install an npm library (npm install, require())

Express Web Server
    - Urls and paths + routing
    - Content Types
    - Returning html/css content to make a webpage

<h4>Lecture 2 Start</h4>

Poll Everywhere (Did this in class)

**More NPM Stores**

Protestware

- node-ipc
- Do you think this was justified?
- Waht do you think the consequences of this will be?
- How does this make you feel about NPM?

<h4>Postman</h4>

https://www.postman.com/downloads

**Downloaded Postman DONE**

**Lecture 1 Demo**

Simple Website Server Demo

Start Debugging App.js

GET localhost:3000 in Postman

GET localhost:3000/style.css

Error cannot get Something Else

<h4>fs library</h4>

https://nodejs.org/api/fs.html

- Used to access the file system of the server
- Has Synchronous and Asynchronous functions
- readFileSync(<file path>)

We'll learn the synchronous version here and then we'll switch to the asynchronous version in a bit

<h4>Async and Await</h4>

- Created Lecture 02 folder
- /lecture-02/

**Installed Express into Node DONE**
**Installed FS into Node DONE**

- Did Demo 1 simple website with fs and HTML CSS autoupdate file edits

Asynchronous
- A function that won't necessarily finish right away
- async function function_name() {      }
- async functions can only return javascript promises (JS native asynchronous objects)
    - If they return another type, it will be turned into a promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

Await
- Await function calls only happen in Async functions
- Await tells the async function to pause until the requested action finishes
- var x = await some_function();
- If the called function finishes without error, the result is returned and the code continues
- If the called function errors, then an error is thrown (use try/catch)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

<h4>Demo 2 Async Await</h4>

/Users/skyler/.nvm/versions/node/v20.2.0/bin/node ./lecture-02/demo-2-async-await/app.js
about to wait
test2 about to wait
test finished the 3 second wait
finished the 5 second wait

<h4>Demo 3 Simple Server With Async Files</h4>

- **Done, runs successfully on localhost:3000**


html screenshot code:

<h1>Demo 3 Async with Files! This is a very simple website with files!</h1>
    <h1>This is something that I have done! ~Skyler</h1>

<h4>AJAX</h4>

- Asynchronous JavaScript and XML
    - What is XML?
    - Why is XML part of AJAX acronym?

- Synchronous vs. Asynchronous programming
    - Synchronous: means in order
    - Asynchronous: means not in order

- Uses JS to download data (or other stuff) from the server in the background

- Allows dynamically updating a page without making the user wait

- Synchronous Requests (Web 1.0)

- Asynchronous Requests (Web 2.0)

- Example: Mapquest vs. Google Maps (2005)

- Websites before 1999

- AJAX Websites (Gmail 2004, Google Maps 2005)

<h4>Fetch</h4>

- Newer addition to JavaScript
- Will allow AJAX calls to our server without having to reload anything

fetch()
- fetch() is an asynchronous JavaScript function that makes AJAX request
- Use Template:

    response = await fetch(url);
    // optional: check the status code,
    // make sure it is a "success code"" (> 200, < 300)
    responseText = await response.text();
    // do something with the response text

Note on different ways of importing a library

- We'ves used require(), but that isn't always compatible with the libraries
- Alternate set-up
    - In package.json, set "type":"module"
    - Use imports instead of require()
        - import fs from 'fs';
        - import dateFormat from 'dateFormat';
        - import express from 'express';

<h4>Demo 4 Time Website</h4>


- **Done, runs successfully on localhost:3000**

- **Loads current time after pressing Get Time button**

<h4>Query Parameters</h4>

In urls they often end with a question mark ? and information after the question mark

- Part of a URL
- Passes additional info as part of the server request
- Starts with "?", then is composed of name=value pairs separated by & symbols
    - musicwebsite.com/search?genre=disco&sort=popularity&sortOrder=desc
- In Express, they are stored as an object in req.query
    - req.query.genre -> "disco"

<h4>DEMO 5 Pluralize</h4>

- **Done, runs successfully on localhost:3000**
- **Successfully takes user input and pluralizes the word given**

**END LECTURE 2**