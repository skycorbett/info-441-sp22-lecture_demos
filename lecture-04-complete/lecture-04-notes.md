<h4>Deploying</h4>

<h4> Review</h4>
- HTML Parsing
- Express Project Generator

How is A1 Going so far?

- haven't started omegalul
- Spec is kind of confusing
- A little confused about exploit security flaw part
    - In the new project you're supposed to have a wwwroot directory
    that is supposed to be all the files loaded into the browser
    - For the first section of A1 assignment, when the user types in
    the address localhost:3000/index.html your server will say 'oh
    well I'm looking for /index.html it'll be in the wwwroot so I'm 
    going to look in the wwwroot for the index.html file. 
    - But the way we are going to write it is to write a URL with a path
    in it that will let you get other files in different directories from that
    wwwroot
    - The first to select is the app.js which is running the server at server root
    - Then we go to another folder which has the darksecrets.txt files


<h4>Various Useful JavaScript and NodeJS features</h4>

- Templates with '' and ${}
- Ternary
- Iterators
    - each
    - map
    - filter 
    - Start script defined in package.json 


We'll be going over:
- Strings in a way that is more flexible and will come in handy in Assignment A2
    - It's using the back-tick mark `
    - We can use it to make template strings in JavaScript
    - This will be useful, particularly in A2
- Ternary operations are another way of doing if-else
- Iterators
    - You may know for loops from a Java class
    - JavaScript provides some ways of going over a list, array, or object using these functions 'each' 'map' and 'filter'
- For NodeJS, how to define the start script in the Package.JSON file

index.js

import express from 'express';
var router = exrpess.Router();

/* GET home page. */
router.get('/' function(req, res, next) {
    res.render('index', { title: 'Express'});
});

export default router;


<h4>Demo 1 NodeJS Tricks</h4>

new app.js file

How we've been doing strings:

    - We've been making HTML into a string

**Template Strings Demo**

    let title = "This page"
    let subtitle = "this is an example page"
    let description = "see, here it is!"

    let html = "<html><body>" +
                "<h1> + title + </h1>" +
                "<h2> + subtitle + </h2>" +
                "<p> + description + </p>" +
                "</body></html>"

    console.log(html)

    - This prints out HTML stuck together with a bunch of quotes

    - This is the way we've seen making HTML strings before

    - Another way of doing this is to use the back-tick template option

    - If we start a back-tick quote that's back tick ` and another back tick `
        ``
        Then what works well with this is that it helps the newlines to have actual text
        
        `` makes it so that it's one quote that includes all the new lines

        We don't have to use a lot of + signs to add new lines or functions

        To add functions we use ${} dollar sign with curly brackets with the function name inside the curly brackets

    let html2 = `
    <html>
        <body>
            <h1>${title}</h1>
            <h2>${subtitles}</h2>
            <p>${description}</p>
        </body>
    </html>

    console.log(html)


    **What if the description was undefined?**

    let title = "This page"
    let subtitle = "this is an example page"
    let description = "undefined"

    let html2 = `
    <html>
        <body>
            <h1>${title}</h1>
            <h2>${subtitles}</h2>
            <p>${description ? description : ""}</p>
        </body>
    </html>

    In JavaScript, undefined is seen by JavaScript as a false value, and everything else by JavaScript is seen as true

    This is one way of checking to see if something is defined before you stick it in code


    function descriptionHtml(description){
        if(description){
            return `<p>${description}</p>`
        }else{
            return ""
        }
    }


    let html3 = `
    <html>
        <body>
            <h1>${title}</h1>
            <h2>${subtitles}</h2>
            ${descriptionHtml(description)}
        </body>
    </html>

console.log(html3)
        - We can make the things inside of curly braces function calls
        - Then we can call the function inside of a ${} template that calls a variable
        -  Using ternary operators for checking if a function is valid is great, when a tenary operator gets large it's best to put what it is calling inside of its own function

**Iterators Demo**

let arr = [
    "first name : Kyle",
    "last name : Thayer",
    "age : 38",
    "glasses : yes"

]

    - This is an array with 4 strings. Each string has a key value pair. If you wanted to get this information out of the array it wouldn't be easy to access, so we're going to try to make it better.

// "forEach" runs a function on each item in an object/array
// we use it to extract the values into an object

    - We're going to create a new object that's formatted into a data structure and we're going to try to get the data from the object by using a forEach loop
    - You can use a normal for loop but for this we're using the forEach loop
    - Basic thing about forEach is that it allows functions to run on each object in the array

let values = {}
arr.forEach(item => {

    let split_item = item.split(" : ")

    values[split_item[0]] = split_item[1]

})
console.log(values)

** map **

// "map" creates a modified version of an array
// it makes a new array, where the result is running a function
// item int he old array

// map demo 1: replace the ":" with "=" in the original array (arr)

- We want to replace all the colons with equals as something to do with map

let modifiedArr = arr.map(item => {

    item.replace(":", "=")

})
console.log(modifiedArr)

// map demo 2: just get the first part of the items in the array
let modifiedArr2 = arr.map(item => {

    return item.split(" : ")[0]

})
console.log(modifiedArr2)

Now we have a new array that just has the first name, last name, age, and glasses

// Note: with "map" you could take an array of values, and return an array of values, and
// return an array of html that has those values in it

// "filter" it goes through an array and makes a new array with only some of the old items
// You provide ""filter"" with a function and it keeps the items where the function returns true,
// and tosses out the items where the function returns false.

let arr = [
    "first name : Kyle",
    "last name : Thayer",
    "age : 38",
    "glasses : yes"
]

We only want the first and last name information from this array, so we're going to let filter to do this

let filteredArr = arr.filter(item => {
    if(item.includes("name" )) {
        return true
    } else {
        return false
    }
})
console.log(filteredArr)

These are functions we will be using as we do demos in the future and we want to make sure we are familiar with them

You can use them or for loops if you're more comfortable

filter

map

and forEach

as well as `` and ${}


<h4>npm start</h4>

npm init turns projects into a proper npm project

creates Package.JSON

we want to define how we start the project with npm

Within Package.JSON within "scripts" we add a line with "start"

    "start" : "node app.js"

Then with this script we are telling npm if you want to start the project this is our start command

This will tell npm to look through Package.JSON and look for app.js as my start command

"scripts" tell npm the kinds of things it would expect if we ran that command, for instance if we run "test" then it will look for "test" command in "scripts" and then run what is inside the "test" command


We have trouble with Node Versions below 14


<h4>Deploying</h4>

Simple (old) Setup

Internet Traffic -> My Computer (The Server)

- Benefit
    - I control the computer runniing the website
- Drawbacks
    - I have to keep my computer (and program) running for the website to be live
    - I have to use my personal internet connection for all traffic
    - My internet connection needs to have a permanent IP address
    - My computer can get over-loaded

Dedicated Server

Internet Traffic -> My Server In A Rack < - > Host < - > My Computer

- Benefit
    - I can turn my computer on and off whenever I want
    - Someone else in charge of internet connection

- Drawbacks
    - The configuration of the server might be different than my computer
    - I still have to pay to keep a whole computer on 24/7

VM on a shared server

Internet Traffic -> My code on a shared server <-> My computer

- Benefit
    - Config same!
    - Only part of a computer
    - Because this is a separately running virtual machine, if you get a lot of traffic the people hosting your site can move your site to another virtual machine so you can get as much traffic as your internet site might needs

- Drawbacks
    - Slow boot
    - Duplicate OS space


    +Virtual Machines+

    VM A                VM B            VM C
    App A               App B           App C
    Bins / Libs         Bins / Libs     Bins / Libs
    Guest OS            Guest OS        Guest OS
        ^
    +Hypervisor+
        ^
    +Hardware+


Heroku

- Free tier
    - Automatically shuts down after half hour of no use
    - Limited time allowed to run
    - HTTPS only on a auto-generated Heroku URL

- Paid
    - Always running
    - HTTPS on custom domain names

AWS *will* charge you if you give them payment information for their services


Deploying with Heroku
https://devcenter.heroku.com/articles/getting-started-with-nodejs 

- How to: Create Free Heroku App
- Download Heroku CLI
- Choose a project folder
- Make sure project folder is git repo
- Run “heroku create”
- Make sure your project has the following “start” defined in package.json, e.g., 

  "scripts": {
	"start": "node app.js"
  },

- Your app listens to the port defined in an environment variable PORT

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
- Make sure everything committed with git
- Deploy app: “git push heroku main” (or “git push heroku master”)

**LECTURE 4 COMPLETE**