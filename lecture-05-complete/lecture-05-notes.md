JSON is short for Javascript Object Notation

Way of storing values / Grouping data together


When you have JSON data together 

To create a JSON object you use curly braces { } for the beginning and end


You use KEY and VALUE pairs

{
	"key" : "value",

	"another_key" : 3,

	"yet_another_key" : [1, 4, 6]
}

They can be strings, they can be numbers, they can be arrays, they can even be other JavaScript objects


DEMO: PTEROSAURS 

At the root there is an array of JSON objects

Pterosaur

See Pterosaur Data!

Step 1:

<html>

<head>
<title>Pterosaur</title>
	<link rel=”stylesheet” href=”/stylesheets/style.css”>
	<script src=”javascripts/index.js”></script>
</head>

<body>
	<h1>Pterosaur</h1>
	<p>See Pterosaur Data!</p>
<button onclick=”getPterosaurs()”>Load Pterosaurs</button>

<div id=”results”></div>
</body>

</html>

There’s this function we’re trying to call (getPterosaurs()) that doesn’t exist yet


index.js is where we are going to stash our functions

<script src=”javascripts/index.js”></script>


index.js needs the function getPterosaurs()


async function getPsterosaurs(){
	// get info from server

	document.getElementByID(‘results’).innerHTML = “TODO: load info from server”

}


All we’ve done so far is taken the standard Express Starter and changed the HTML to be about Pterosaurs then made a button that goes to a JavaScript file and it’ll just say “TODO load from server” in HTML

Try running the debugger to make sure it works, listen to localhost:3000

Now it says **Pterosaur**, See Pterosaur data! and a button that says "Load Pterosaurs"


We could start either way at this point, from the client side or the server side. Often we think about the client end about how things are going to run first as opposed to the server and how the server is designed. So we'll start here from the client

async function getPterosaurs(){
	// get info from server

	document.getElementById('results).innerHTML = "TODO: load info from server"
}


We're going to do a fetch call

let response = await fetch('')

and then we need to decide what is the endpoint or handler we want to request to get this data. 

There are different ways to do this, we could put pterosaur.json into the public directory and just ask it as a regular route from the static server but we're not going to do that now because we want to do some additional things later.

Instead what we're going to do is invent a new endpoint to get it

We're going to say that we want it to be a part of the API 

We want to keep the API separate, so we want to fetch from

	fetch('api/getPterosaurs')

Once we've done that we want to get the information from this file


Previously we've been doin gsomething like

	let responseText = await response.text()


This is how we've done it before to get the string of the content of the file--of the content of the text that comes back

But this is actually structured JavaScript information in JSON notation so I want to get this back as JSON information

fetch() already has a way to do this

So I want to let responseJson come back as response.json()

	let responseJSON = await response.json()

	document. getElementById('results').innerHTML = responseJson

So my client is assuming that there is a place to call '/api/getPterosaurs' 

but if I look at my 'app.js' it knows how to handle '/', it knows how to handle '/users'. So we need to add it

	app.user('/api', apiRouter)

We're going to have to create a new Router to handle all requests that go to '/api'

That measn I also need to import a file as well for that router

	import apiRouter from './routes/api/api.js'

We're going to put this in '.routes/api/api.js' by making an /api folder in /routes and a new file named 'api.js'

So the api.js file goes into the /api directory

We need the import and exports things here, so we're going to copy the code from the default 'users.js' router and copy the code from there

import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/, function(req, res, next){
	res.sent('respond with a resource);
});

express default router;


Now we need to look in here for the request for 'api/getPterosaurs'

	router.get('/getPterosaurs', function(req, res, next){

	})


Once the '/api' is used, it looks for api.js and then we look for 'getPterosaurs'

For now we need to do for the first pass at this is send that file back

	res.sendfile(")

And we need to find the Pterosaurs file which is in the 'data/' folder from the root directory under 'pterosaur.json'

	res.sendfile("data/pterosaur.json");

You have to specify the root for sendFile 

	__dirname, "data/pterosaur.json"


##BREAK##

The process module works better than __dirname, so first we have to call the process module in the api.js file

	import process from 'process'

and now the sendFile code gets the current working directory from

	process.cwd()

where 'cwd()' means current working directory. process then find the file at 

	res.sendfile(process.cwd() + "data/pterosaur.json')

Now on the website we can see the getPterosaurs call and we can see in the Network tab of the browser the array of information

We've managed to load the JSON data from the server into the client, now we want to update the client to make it display things nicely

So right now responseJson has all the information about the pterosaurs, and to make it easier to follow we're going to rename it

	let pterosaurJson = await response.json()

It's going to have information of all the pterosaurs in an array. And instead of trying to stick it into the HTML which turned out pretty ugly, we're going to try to turn it into HTML and put it on the page

	let pterosaurHtml = pterosaurJson

We're going to take this pterosaurJason and go through each of the thing in this array and turn it into HTML

This is what map is good for

.map is good for going through each item and coming up with a new version of it

We're going to go through each JSON item and come up with an HTML version of it

	let pterosaurHtml = pterosaurJson.map(onePterosaur => {
		let onePterosaurHtml = `
			<div>
				<p>${onePterosaur.Genus}</p>
				<img src ="${onePterosaur.img}" />
			</div>
	})


This is going to go through one of each item of the Pterosaurs and it will create an item for each of them

Then at the end of this 'map' we have an array of HTML strings and we want to combine them all together

The way that we're going to combine them all together into one giant string is to use 

	.join('')

'.join' will combine them together by putting a piece of text between each one.

We're just going to put a piece of blank text between each one

So each one will be stuck one after the other

This should come up with one big string with all the HTML

We're going to have that be the thing that gets displayed

After re-running the server and going to localhost:3000

We need to return something in 'map' in order for a thing to be replaced. If you return 'map' nothing, then 'map' will display nothing.

	return onePterosaurHtml
}).join('')

	document.getElementById('results).innerHTML = pterosaurHtml
}

Now when we press the 'Load Pterosaur' button on the HTML page it shows the names of all the Pterosaurs and images to go with some of them


DEMO PART 2


In Demo 1, our client pulls JSON data from the server when we push the Load Pterosaurs button and displays the information in HTML

Looking at the code, the client gets the Pterosaur JSON data turns it into some HTML and displays it 

The server here for the endpoint 'api/getPterosaurs' all it does is find that 'pterosaur.json' file and returns it


Because this is a server, and we can put our own custom code here, we can have it do something more interesting with the file before we display it


Right now it's just returning the pterosaur.json file as is, but what we want to do is on the server we only return the Pterosaurs with Images with them to make it so that my display is better


Now that we load the JSON data, we only want to return the JSON data with images


We could do this on the server side or the client side, the reason we want to demo doing it on the server side is that often we have very large databases and a user only wants a small subset of that information

Often we want to do filtering and selecting on the server, so that only the information that matters to the client or the user gets sent back

That's why were' going to do that work using the server here

Right now all the server does is send the pterosaur.json file back as is

What we want to do instead is make the server
	- Load the pterosaur.json file
	- Filter out the parts that we want
	- Send those parts back as JSON data

First we're going to remove the sendFile data and instead we're going to first load the file into our server

	const data = await fs.readFile()

To read the specific file that we want, and that file is the 'data/pterosaur.json' file

	const data = await fs.readFile()

For our import to import the right part of 'fs' for this to work, we need to import promises for fs

	import { promises as fs } from 'fs';

const vs. let

const is for loading things that aren't supposed to change


Next we need to read the JSON and turn it into a JavaScript object

	let pterosaurInfo = JSON.parse(data)

JSON.parse takes a string and turns it into JSON


	// todo: delete ones without images

After we load the data we want to send back what we have remaining to the server

Instead of res.send we can use res.json-- that will automatically set the type and turn the JSON object I give it into a string to send across the internet

	res.json(pterosaurInfo)

Now here what we do is read the JSON file, turn it into a JavaScript object, and then turning that back into JSON

## DEMO Error unexpected reserve word

## DEMO Error Deleted the process library

## DEMO Error 'async' needs to go next to function calls if we're using 'await'


Now we're going to go through and only display the pterosaurs that have images with them and then display them

The way we're going to do that is to use a filter

We're going to make a new object that's going to be the result of filters

	let filteredPterosaurInfo 

Then we're going to take the Pterosaur info and run '.filter' on it, and then we're going to choose which ones to keep and which ones to get rid of

	let filteredPterosaurInfo = pterosaurInfo.filter (onePterosaur => {

		if(onePterosaur.img && onePterosaur.img != "")

	})

We're making sure that there is an image field, and that image field isn't empty

If that's the case then there +is+ a URL, probably, so we can return that one to be true

Otherwise if it's not defined or it's a blank, then we want to return 'false' and get rid of that Pterosaur


Here we should end up with a new array with only the information about Pterosaur that have an image


It will read the JSON file, filter it to only choose the ones that I care about and only send those ones across the internet to the client

Now when we presss 'Load Pterosaurs' now it just shows us the ones that have images. So now we can look through all the different Pterosaurs that have images.


RECAP

On our client we tried to fetch the endpoint 'api/getPterosaurs' which we're expecting it to have JSON

Then we took that JSON and turned it into HTML and displayed it

Unlike in Homework A2 which we're going to do, where we're going to make HTML on the serverside

Here we are sending JSON across and building HTML on the client side

When you're creating HTML compontents to stick in, you could build it on the server or the client

This one is client-side rendering because we are building HTML on the client


As far as 'api/getPterosaurs' 

If we go back to 'app.js' there is a handler for '/api' that's on the 'apiRouter' which is loading from this 'api.js' file

The 'api.js' file handles the next part, 'api/getPterosaurs'

It loads the Pterosaur data file, selects only the things that have images, and only sends those things that have images back across to the browser


Again, when you have very, very large files, it's important to do this on the server side so you don't end up sending large files across the internet.

<h4>HTTP Verbs</h4>

Demo’d how to take JSON data that’s on the server, do some filtering on it, and send it back to the client

We did the process of getting data through JSON from the server to the client so the client can display it nicely.

Now what we want to do is we want to send data *from* the client to have the client fill out a form,

send the data back to the server, and have the server save it in some fashion (using JSON again).


Before we get into that we’re going to talk about HTTP verbs.


Whenever you do a HTTP request there is a +verb+ associated with that request

By default all of these requests are GET requests

So when we type a URL into a browser or do a fetch request, by default it is requesting to GET data

GET retrieves a data or a file, it doesn't modify anything, the server isn't supposed to modify or change anything by using this request

POST 
	- Create a new item

PUT
	- Replace all values for a given item

PATCH
	- Replace some values for a given item

DELTE
	- Delete given item

HTTP VERBS

GET (default): retrieve data/file (no modification)
POST: to create a new item
PUT: to replace all the values for a given item
PATCH: is Replace some values for a given item
DELETE: Delete given item

and others: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

You can GET information, you can add information (POST), you can update information (PUT or PATCH), and you can DELETE information.


These are the basic actions that we have here

We have been by default using GET in all the cases we've seen so far

Now we're going to use POST to create new information we're going to save on the server


DEMO: USER DATA POST

We're going to demo doing a POST from the client side to send data to the server 

We want to make a website where people can enter information about themselves and we’ll save it somewhere on the server so we can load it again later

##DEMO COPYING DEMO CODE

We want to make a website where people can enter information about themselves and we’ll save it somewhere on the server so we can load it again later

What we're going to do is copy the express starter project
	- Default Express Starter
	- HTML file says Express and Welcome to Express
	- We're now going to go through and modify it to become this new project

<title>User Info Uploader</title>

We're going to make a place here in the html where someone can input their information


	<body>
		<h1>User Info Uploader</h1>
		First name: <input id="first_name_input" type="text" />

This will create a text box for someone to fill out. We'll do the same for the last name

		Last name: <input id="last_name_input" type"text" />
		Favorite Ice Cream: <input id="favorite_ice_cream" type="text" />

We'll add a button for them to click to upload the data

	<button onClick="uploadData()">Upload Data</button>

</body>

</html>

#DEMO Running the page to see what it looks like with the input fields
#DEMO Has First name, Last name, Favorite Ice Cream, and a button to press

Upload Data button doesn't work right now because nowhere have we defined the function 'UploadData()'

We need the function UploadData() for this to do anything

We're going to make an index.js file and define functions there

	<script src="javascripts/index.js"></script>

Under index.js :

	async function uploadData()

What we want to do is for this function to go through each of these text boxes, find the information from the text boxes, and then send the information to the server using a POST request

In order get the information here, I can get the name

	let first_name = 

What I've put using stuff using JavaScript into the HTML we use document.getElementByID(""), found the element that I wanted, and then set the innerHTML on it.

Now we want to get the value out of one of these things, so I'm going to do the same thing with document.getElementByID("")

But instead of setting the innerHTML on it, we're going to use '.val' and by adding '.val' it will find whatever someone typed into the input box there

Then we're going to save it into a variable so

	async function uploadData(){
		let first_name = documentgetElementById("first_name_input").val
		let last_name = documentgetElementById("last_name_input").val
		let favorite_ice_cream = documentgetElementById("favorite_ice_cream_input").val

	}

These are the values that I want to send to the server

The next thing we have to do is that if we want to send these values to the server there are a few different ways of doing this

The way we're going to do it here is by using JSON

We want to put these all into a JSON object

	let myData = {
		first_name : first_name,
		last_name : last_name,
		favorite_ice_cream: favorite_ice_cream,
	}

Whatever is in the first_name key will have whatever is in the first_name variable

Whatever is in the last_name key will have whatever is in the last_name variable

Whatever is in the favorite_ice_cream key will have whatever is in the favorite_ice_cream_variable

## DEMO ERROR .val left information undefined
## DEMO ERROR .val should be .value


	async function uploadData(){
		let first_name = documentgetElementById("first_name_input").value
		let last_name = documentgetElementById("last_name_input").value
		let favorite_ice_cream = documentgetElementById("favorite_ice_cream_input").value

	}


	let myData = {
		first_name : first_name,
		last_name : last_name,
		favorite_ice_cream: favorite_ice_cream,
	}

	console.log(myData)


This won't leave the inputs as undefined. Now we can see that there's a JSON object with the information that we want.

I have whatever I typed into the JavaScript here and now it's ready to be sent across the internet to the server for the server to save it.

Next, we want to send our data to the server

	//send myData to the server
	let response = await fetch("users/addUserData", {
		method: "POST"
	})

Just like before, we're going to do a fetch() request

	let response = await fetch()

And we can add an endpoint

	let response = await fetch("users/addUserData", {

	})

This is going to be the end point that we'll define

Then if we want to change if we want it to change from the Default of a GET request

What we need to do is add a second thing here which is an object of options, where we can set 'method' to be 'POST' instead of get




This is a POST request to add users data, and we want to send the data across the internet as well

The way we send the data is when we have a POST request, we can set a 'body:' here

The 'body:' of information being sent, and we want to write our data here

The 'body:' is the data of a 'POST' request

	//send myData to the server
	let response = await fetch("users/addUserData", {

		method: "POST",
		body: JSON.stringify(myData),
		headers: {
			'Content-Type': 'application/json'
		}

	})


Unlike previous fetch requests we are doing some additional steps here

- We're defining it as a 'method:' that is not the default 'GET', we're making this a 'POST' one
- We're putting a body: of information into it
	- Which is the JSON information but turned into a string with JSON.stringify
- We're labeling it with a 'header:' with 'Content-Type': 'application/json' so that the server will be able to know that it was JSON data

This is now going to send the request across the internet

But our server doesn't have anything to handle it yet

Let's look at our server here

We already have a handler for our users, 'users.js', so let's go ahead and copy that

	import express from 'express';
	var router = express.Router();

	/* GET users listing. */
	router.get('/getUserData', async function(req, res, next) {
	let userInfo = await fs.readFile("data/userData.json")
	res.type("json")
	res.send(userInfo);
	});


	export default router;

By default we had 'GET' request for '/getUserData' but instead we need a 'POST' request 


	/* POST users listing. */
	router.post('/getUserData', async function(req, res, next) {

Now if someone adds a POST request to '/addUserData' this will be out handler for that

We can make different actions for different endpoints

We need to add a console.log to make sure that it worked

	console.log(req.body)

When we've put the body of a request here it should be in a 'req.body' for the body so we should be able to see that


Then we want to save it to a file somewhere


And send back a message that says 'success' to make sure it was a success

	res.send('success');

We're going to print out to the console the information that we want and make sure that it's a success


We can tell the client that the information was a success but we can work on that in later exercises

## DEMO When we press 'Upload Data' it should send this post request to the server

## DEMO If we look at the Network information we can see that the data was sent to /addUserData

## DEMO It says there is a payload, the payload is the JSON information we are sending, and the message 'success' 

## DEMO If we look at the server, the console.log, it will show that the JSON information was sent


We want to save this somewhere, so what we're going to do is have it create a new file

But to work with files we need the 'fs' library

	import {promises as fs} from "fs";

Make sure 'fs' is included with install with >npm install fs

Now that the filesystem library is loaded we can save this information as a file

We've shown that we have the information there, to save it to a file we're going to use fs

	await fs.writeFile("data/userData.json", req.body)

## DEMO Error, the "data" argument must be a type of string

We have to make sure to turn the JSON data into a string with stringify before saving it as a file

	await fs.writeFile("data/userData.json", JSON.stringify(req.body))

## DEMO Error, a directory must exist before writeFile will save a file to a directory so we have to create the 'data/' directory


Now if we look at the data directory here, we can see the 'userData.json' file

If we were running this function out on a server, any information from anyone who visited the website typed would be saved into the 'userData.json' file

Now we can see that anyone who is on the website that typed information in, they don't know if it was a success

So we're going to the client and make sure that the information we sent to the server loaded

	<h1>Current User Info</h1>
	<button onclick="loadUsers()">Load Users</button>
	<div id="results"></div>

Now there's going to be a button named 'Load Users', and when people press the button I want to load the information and display it

I need a loadUsers() function here now

We have had the uploadData() function but now we want an async function for loadUsers()

	async function loadUsers(){
		let response = await fetch("users/getUserData")
		let usersJson = await response.json()

		document.getElementById("results").inner.HTML = JSON.stringify(userJSON)

	}

We assume that there will be a 'getUserData' endpoint
When we get a request for that, it will send us the user response information
And once we get that, it will stick it in the results <div> so we can see what user information is saved

On the server side, we need a place to listen to this get user data request

We're going to add another router function

We're going to copy the same one as before from the GET users listing

	/* GET users listing. */
	router.get('/getUserData', async function(req, res, next) {
	let userInfo = await fs.readFile("data/userData.json")
	res.type("json")
	res.send(userInfo);
	});

The JSON data has already been turned into a string by stringify, we're just going to say the type is 'JSON' and send it back across the internet like that

When I send it back across the internet the browser should stick the information in the result so we can see what is currently there

The way that we are saving data is that everytime someone pressed Upload Data it replaces the file, we should actually be creating a list and adding to that list instead. 

When we press Upload Data it currently overwrites 'userData.json' file. When we press 'Load Users' on the webpage, it will load the newest version


So now we are using JSON to 
- Send information from the client to the server
- Have the server save that JSON
- Then the server can send that JSON back to the client again

We are sending it back and forth
- Sending it **to** the server with a POST request
- Requesting it **from** the server with a GET request

## RECAP

That was the two different HTTP verbs, POST and GET, and that was JSON data going back and forth from client to server and being **saved** on the server