require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require('cors')

var indexRouter = require('./routes/index');

var app = express();

mongoose.connect(`${process.env.DB_MONGO}`, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
})

mongoose.set('useCreateIndex', true);
// var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds119606.mlab.com:19606/profile`
// mongoose.connect(mongodUri, {
//     useNewUrlParser: true
// }), 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = process.env.PORT || 3000
app.listen(port, (req,res) => {
  console.log(`This server is running on port: ${port}`)
})

module.exports = app;
