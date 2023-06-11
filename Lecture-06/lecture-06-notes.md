LECTURE 6 MIDDLEWARE DATABASES SQL INJECTION


REVIEW

JSON DATA

	How to save it on the server
How to load it from the server to the client
How to send information from the client to the server and save it as a file

We also looked at

HTTP Verbs

	GET is to send data to the user / GET information from the server
	POST is to send data to the server / POST information *to* the server
	PUT modifies all data you’re working with
	PATCH modifies some data you’re working with
	DELETE erases the data you’re working with
etc.
	

JSON file data
	Files on my server

	3. Page server will send an fs.writeFile(...) request to userData.json
	5. The file server will send a fs.readFile(...) response to the Page server

	My page server
2. Which will post a POST request to the Page server with JSON data in the body (POST with JSON body)


	My site in a user’s browser
Someone on the user page will fill out their info and then they do a fetch request
4. The user will ask the page server to load the list of userData (GET request)
6. The fs.readFile(...) JSON userData gets sent back from the Page server to the User’s browser



MIDDLEWARE

Functions that run during each request (or a subset of requests)
	These functions are chained together, each one calling the next function (in the variable 
next)
		At the end they finally call your API endpoint handler (e.g., app.get(“/users”, …))
			And do some sort of SEND response
	They generally either
		Modify the request
		Modify the response
		Log something

app.use(logger(‘dev’));	
	Function that will be logging information
app.use(express.json());
	When a request comes in, it will automatically use JSON
app.use(express.urlencoded({ extended: false}));
	Makes sure that URL stuff is encoded properly
app.use(cookieParser());
	Handles the browser cookies
app.use(express.static(path.join(__dirname, ‘public’)));
	Status file server, it will check and see if you have a file in the directory named ‘public’, and 
if you do it will serve that file to the users web browser

If we want to write our own middleware function here is the structure of Middleware
STRUCTURE OF A MIDDLEWARE FUNCTION
	
	app.use( function (req, res, next) {
		// modify req, res, or log something

	next(); // call the next function (middleware or handler)

})



LECTURE 5 DEMO MIDDLEWARE

Clone Express Starter Project

	Under app.js modify the middleware in the Express Starter Project








DATABASES


Saving things in a JSON file works, it can be inconvenient for reformatting things 

SELECT * FROM emails WHERE user = 57


Databases are normally completely separate programs in the internet or at least something you have to access with an internet connection



SQL

SQLITE
Easiest set-up
sqllitetutorial.net/sqlite-nodejs/
Doesn’t create a separate server
This one can just be imported as a NodeJS library and run straight in your program
Demo create table and have user search



In homework we’ll be using MongoDB


We won’t be using SQLite in the future in class





SQL Injection (security problem)



http://intense-peak-39177.herokuapp.com/



Person Search (Bad Sql Code Example)
Enter first name to search (e.g., Kyle):  Search
Search Results

Your tasks
Task 1
Carefully craft a search name that circumvents the internal sql code to get the list of all names.
To do this, have your search name cause sql select statement's WHERE clause to always be true
What you should know about the code:
Table creation code:
db.run('CREATE TABLE people(first_name text, last_name text'))
API handler for the person route:
router.get('/person', function(req, res, next) {
    let nameSearch = req.query.nameSearch ? req.query.nameSearch : ""
    db.all(`SELECT * FROM people WHERE first_name = "${nameSearch}"`, (err, allRows) => {
      if (err){
        res.send("db error" + err);
      }
      let matchingPeople = allRows.map(row => `${row.first_name} ${row.last_name}`).join("\n");
      res.send(matchingPeople);
    });
  });
Other helpful info
Anything in a line after a "--" is considered a comment
The syntax for a SELECT statment in sql is:
SELECT col_name, another_col_name FROM table_name
SELECTs can have WHERE conditions combined with AND and OR:
SELECT col_name FROM table_name WHERE col_name > 3 AND col_name < 5
To see the answer
After you have tried yourself, you can find the answer below in an html comment. You'll have to view source or use the inspector to see it.
Task 2
Carefully craft a search name that circumvents the internal sql code to get the data out of the secret_table.
To do this, have your search name cause the server to select from the secret_table and add it to your currnet results:
There may be other ways of messing this up, please restrict yourself to trying to get the info from the secret_table.
What you should know about the code:
Table creation code:
db.run('CREATE TABLE secret_table(message text)')
db.run('CREATE TABLE people(first_name text, last_name text'))
API handler for the person route:
router.get('/person', function(req, res, next) {
    let nameSearch = req.query.nameSearch ? req.query.nameSearch : ""
    db.all(`SELECT * FROM people WHERE first_name = "${nameSearch}"`, (err, allRows) => {
      if (err){
        res.send("db error" + err);
      }
      let matchingPeople = allRows.map(row => `${row.first_name} ${row.last_name}`).join("\n");
      res.send(matchingPeople);
    });
  });
Other helpful info
Anything in a line after a "--" is considered a comment
The syntax for a SELECT statment in sql is:
SELECT col_name, another_col_name FROM table_name
SELECTs can rename the column results come back with AS:
SELECT col_name AS renamed_result FROM table_name
SELECT queries can be tied together with UNION:
SELECT a FROM table1 UNION select b AS a FROM table2
Instead of a column name from a select, you can put a value
SELECT "hello" from table1
(this will return copies of the string "hello")
To see the answer
After you have tried yourself, you can find the answer below in an html comment. You'll have to view source or use the inspector to see it.

