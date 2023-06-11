LECTURE 7 REST API, MVC, MongoDB, and Mongoose


RECAP

We talked about SQLite and Database connections



REST APIs

REST is short for Representative State Transfer

https://drstearns.github.io/tutorials/rest/


REST APIs are setup sometimes called a RESTful pattern


For your server you do ‘/api’ version, then you do a collection, then you do a unique identifier, and then you do a related collection after that 

So it’s a way of putting information here for someone to do a request

We talked about HTTP Verbs (GET, POST, PUT, PATCH, DELETE, etc.)



Alternatives to REST


There are ays of organizing these but this is how it is usually organized


https://api.stackexchange.com/docs



Stack Overflow URL / API organization 

https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined

We’re at the website StackOverflow.com

/questions

/identifier-question-number

This isn’t quite the same as a REST API as it also has front end code but when we go to the REST API it is the same style of things


/2.3/questions?order=desc&sort=activity&site=stackoverflow


https://api.stackexchange.com/2.3/questions/19059580/?order=desc&sort=activity&site=stackoverflow

Questions + ID

{"items":[{"tags":["javascript","node.js","sockets","express","pug"],"owner":{"account_id":1433124,"reputation":12148,"user_id":1355058,"user_type":"registered","accept_rate":59,"profile_image":"https://www.gravatar.com/avatar/d7f365107eff00636d68d000cf6bd8ea?s=256&d=identicon&r=PG","display_name":"MightyMouse","link":"https://stackoverflow.com/users/1355058/mightymouse"},"is_answered":true,"view_count":1158475,"accepted_answer_id":19059825,"answer_count":11,"score":475,"last_activity_date":1645694686,"creation_date":1380313860,"last_edit_date":1609281718,"question_id":19059580,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined","title":"Client on Node.js: Uncaught ReferenceError: require is not defined"}],"has_more":false,"quota_max":300,"quota_remaining":293}


https://api.stackexchange.com/2.3/questions/19059580/answers?order=desc&sort=activity&site=stackoverflow

Questions + ID + Available Answers to the Question

{"items":[{"owner":{"account_id":9504432,"reputation":1962,"user_id":7064454,"user_type":"registered","accept_rate":100,"profile_image":"https://i.stack.imgur.com/Moj2h.gif?s=256&g=1","display_name":"Enrico","link":"https://stackoverflow.com/users/7064454/enrico"},"is_accepted":false,"score":1,"last_activity_date":1645694686,"creation_date":1645694686,"answer_id":71249727,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":3385495,"reputation":3925,"user_id":2841538,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/?s=256&d=identicon&r=PG&f=1","display_name":"us_david","link":"https://stackoverflow.com/users/2841538/us-david"},"is_accepted":false,"score":1,"last_activity_date":1636777693,"creation_date":1636777693,"answer_id":69951462,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":12393925,"reputation":1002,"user_id":9034699,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-gdnSC56cMqc/AAAAAAAAAAI/AAAAAAAADGI/0xNlL754R60/photo.jpg?sz=256","display_name":"Kibonge Murphy","link":"https://stackoverflow.com/users/9034699/kibonge-murphy"},"is_accepted":false,"score":80,"last_activity_date":1633630041,"last_edit_date":1633630041,"creation_date":1559048048,"answer_id":56342771,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":14119814,"reputation":205,"user_id":10200623,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-APdTNf0CStI/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7oURzjvbumBsfd_U4afZ1rPgVmARw/mo/photo.jpg?sz=256","display_name":"eaithy","link":"https://stackoverflow.com/users/10200623/eaithy"},"is_accepted":false,"score":4,"last_activity_date":1630612623,"last_edit_date":1630612623,"creation_date":1569593556,"answer_id":58136279,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":18779281,"reputation":49,"user_id":13694303,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/105b1a0f014b4a79c9b65e356bbb4cd2?s=256&d=identicon&r=PG&f=1","display_name":"Abdullah","link":"https://stackoverflow.com/users/13694303/abdullah"},"is_accepted":false,"score":3,"last_activity_date":1617031592,"last_edit_date":1617031592,"creation_date":1617021445,"answer_id":66854322,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":19869258,"reputation":21,"user_id":14555819,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14GhnkkUPCOqMc4aKfBc-vUioMeF4GRGk9NekbWs=k-s256","display_name":"Xavier GRANDJEAN","link":"https://stackoverflow.com/users/14555819/xavier-grandjean"},"is_accepted":false,"score":1,"last_activity_date":1609283064,"last_edit_date":1609283064,"creation_date":1604174410,"answer_id":64625865,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":16942279,"reputation":431,"user_id":13999671,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AAuE7mAjiXdq-eodXV2jY-TLGTWZbJgPimn1o8_xGh7r=k-s256","display_name":"Noha Abuaesh","link":"https://stackoverflow.com/users/13999671/noha-abuaesh"},"is_accepted":false,"score":25,"last_activity_date":1609283014,"last_edit_date":1609283014,"creation_date":1596233140,"answer_id":63199675,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":12220316,"reputation":506,"user_id":8919549,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-cGikkOndMlc/AAAAAAAAAAI/AAAAAAAAADQ/izEoPQTPSQk/photo.jpg?sz=256","display_name":"Wael Chorfan","link":"https://stackoverflow.com/users/8919549/wael-chorfan"},"is_accepted":false,"score":3,"last_activity_date":1609282655,"last_edit_date":1609282655,"creation_date":1535270500,"answer_id":52024333,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":1193124,"reputation":425,"user_id":1165460,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/83ddf9e634ddf3fb49d3cf26e679db75?s=256&d=identicon&r=PG","display_name":"ydanila","link":"https://stackoverflow.com/users/1165460/ydanila"},"is_accepted":false,"score":3,"last_activity_date":1609282567,"last_edit_date":1609282567,"creation_date":1533292937,"answer_id":51670874,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":459552,"reputation":71467,"user_id":860099,"user_type":"registered","accept_rate":72,"profile_image":"https://i.stack.imgur.com/WfG1n.jpg?s=256&g=1","display_name":"Kamil Kiełczewski","link":"https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski"},"is_accepted":false,"score":54,"last_activity_date":1609282320,"last_edit_date":1609282320,"creation_date":1530522192,"answer_id":51132483,"question_id":19059580,"content_license":"CC BY-SA 4.0"},{"owner":{"account_id":6199,"reputation":37460,"user_id":10333,"user_type":"registered","accept_rate":86,"profile_image":"https://www.gravatar.com/avatar/0f56a5e429de009a27b0ae8f796ef2df?s=256&d=identicon&r=PG","display_name":"JP Richardson","link":"https://stackoverflow.com/users/10333/jp-richardson"},"is_accepted":true,"score":552,"last_activity_date":1609282004,"last_edit_date":1609282004,"creation_date":1380314908,"answer_id":19059825,"question_id":19059580,"content_license":"CC BY-SA 4.0"}],"has_more":false,"quota_max":300,"quota_remaining":292}



This is one way of organizing APIs, we won’t be doing exactly this but this is one way of organizing things similar to what we’ll be doing in the homework


// END REST APIS DEMO


MVC

MVC — A way of organizing full stack web application code
	Model: Database and data representation
	View: How the data is displayed
	Controller: Connecting the model to the view
		Letting the view perform actions on the data	
			For example, CRUD actions (Create, Read, Update, Delete)

			You’ll notice that they line up nicely with some of the HTTP Verbs:
			Create would be POST
			Read would be GET
			Update would be PATCH
			Delete is also DELETE

	In our code:
		Model: Database, database connection and data organization definitions
		 View: The client code in the public directory (html, css, js)
		Controller: The route handlers, allowing the view to perform operations on   the model

Model-View-Controller

View: Get my Emails

Model: SELECT * FROM emails WHERE user = 57

Controller: The route handling that gets the user from the Web Visualization Layer to the Data in the Database


DEMO 1 USER DATA REST MVC

https://github.com/skycorbett/express-starter/tree/demo-1-user-data-rest-mvc


MONGO DB

MongoDB is a database like SQL is a database, but MongoDB you don’t have to define what the rules are for storage up front

A database like SQL, except you don’t have to define data storage rules up-front
Terminology comparison
SQL Terms/Concepts			* MongoDB Terms/Concepts
Database					* Database
Table						* collection 
Row						* document or BSON document
Column					* field


MongoDB Atlas

https://www.mongodb.com/try




MONGODB FREE USER

Uw-441-testadmin

MONGODB FREE USER PASSWORD

uw-441-testadmin001


You will only be able to connect to your cluster from the following list of IP Addresses:
IP Address
Comment
Status
Actions
0.0.0.0/0  (includes your current IP address)
uw-441-access-from-anywhere






Connect to uw-441-cluster-01


Include full driver code example
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://uw-441-testadmin:<password>@uw-441-cluster-01.u4kua.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
 const collection = client.db("test").collection("devices");
 // perform actions on the collection object
 client.close();
});



 Add your connection string into your application code




mongodb+srv://uw-441-testadmin:uw-441-testadmin001@uw-441-cluster-01.u4kua.mongodb.net/?retryWrites=true&w=majority



Replace <password> with the password for the uw-441-testadmin user. Ensure any option params are URL encoded


Use the mongodb url to connect using NodeJS Mongoose

await mongoose.connect(‘mongodb+srv://uw-441-testadmin:uw-441-testadmin001@uw-441-cluster-01.u4kua.mongodb.net/?retryWrites=true&w=majority’);


Object Relational Models (ORMs)

Object relational models are libraries for working with databases
	They abstract our database connections and queries
	Treat tables and entries as objects to program with in an object-oriented programming style


Mongoose
	A nodeJS ORM for MongoDB
	https://mongoosejs.com


So what object relational models do is abstract the database connection and queries for us and turn the tables and collections into objects for us so that we can work with them in a more object oriented programming style


The one we’re going to use for these projects is Mongoose

DEMO OF MONGOOSE


