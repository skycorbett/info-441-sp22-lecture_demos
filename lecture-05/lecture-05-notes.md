JSON is short for Javascript Object Notation

Way of storing values / Grouping data together


When you have JSON data together 

To create a JSON object you use curly braces { } for the beginning and end


You use KEY and VALUE pairs

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


index.js

<script src=”javascripts/index.js”></script>


index.js needs the function getPterosaurs()


async function getPsterosaurs(){
	// get info from server

	document.getElementByID(‘results’).innerHTML = “TODO: load info from server”

}


All we’ve done so far is taken the standard Express Starter and changed the HTML to be about Pterosaurs then made a button that goes to a JavaScript file and it’ll just say “TODO load from server” in HTML

getPterosaurs()







.map is good for going through each item and coming up with a new version of it





DEMO PART 2

Now that we load the JSON data, we only want to return the JSON data with images




RECAP

Demo’d how to take JSON data that’s on the server, do some filtering on it, and send it back to the client

We did the process of getting data through JSON from the server to the client so the client can display it nicely.

Now what we want to do is we want to send data *from* the client to have the client fill out a form,

send the data back to the server, and have the server save it in some fashion using JSON again.


Before we get into that we’re going to talk about HTTP verbs.


HTTP VERBS

GET (default): retrieve data/file (no modification)
POST: to create a new item
PUT: to replace all the values for a given item
PATCH: is Replace some values for a given item
DELETE: Delete given item

and others: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

You can GET information, you can add information (POST), you can update information (PUT or PATCH), and you can DELETE information.



DEMO: USER DATA POST


We want to make a website where people can enter information about themselves and we’ll save it somewhere on the server so we can load it again later
