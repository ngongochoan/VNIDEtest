var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
var routes = require('./api/routes/index');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
require('dotenv').config();
const { createServer } = require("http");

var app = express();
const http = require('http').Server(app);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload.single('file'));

routes(app);



// setInterval(()=>{get(1).then(result => {
//    console.log('meomeo') ;
// })}, 100000);



module.exports = app;
