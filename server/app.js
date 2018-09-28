var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var problemRouter = require("./routes/problemRouter");
var mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost:27017/algor-academy', {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use('/api/problems', problemRouter);

var server = app.listen(port, () => {
  console.log("app running on port ", server.address().port);
});