//Instantiating express the framwork we are using,along with the port we will use when the GET, POST and requests are made on the server
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')


//Bodyparser helps us parse over the POST method and add the data to output to the user
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//All of our example app.get methods that take a webpage on the port and sends a request with data to the console
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//All of our example app.get methods that take a webpage on the port and sends a request with data to the console
app.get('/whatever', (req, res) => {
    res.send('Goodbye!')
})

//All of our example app.get methods that take a webpage on the port and sends a request with data to the console
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Get method that takes in an array of JSON values and outputs them onto the console using a request
app.get('/api/books', (req,res) => {
    const myBook = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ]
            res.json({
                Jamiebooks:myBook
            })
        }
)

//Get method that sends the data contained within index.html as plain text
app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

//After changing the directory to /name in index.html this is the get method for our hello example
app.get('/name', (req,res) => {
    console.log(req.body);
    res.send("Hello "+req.query.fname+ ' '+req.query.lname);
})

//This is the post method from index.html that outputs the input from the user contained within index.html
app.post('/name', (req,res) => {
    console.log(req.body);
    res.send('Hello again '+ req.body.fname + ' '+req.body.lname);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})