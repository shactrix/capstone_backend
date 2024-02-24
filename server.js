require("dotenv").config();
const { PORT } = process.env;

const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const posts = require('./routes/posts')
const user = require('./routes/user')

// MiddleWare
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());


// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(cors('*'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Routes
app.use('/', posts); 
app.use("/user", user);

app.get('/', (req, res) => {
    res.send('Backend / Route');
  });

//catch all 404 route! 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
