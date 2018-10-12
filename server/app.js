var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var problemRouter = require("./routes/problemRouter");
var mongoose = require("mongoose");
var path = require("path");

const port = process.env.PORT || 3000;

const db = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/algor-academy",
  {
    useNewUrlParser: true
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Routes
app.use("/api/problems", problemRouter);

app.use(express.static(__dirname + "../frontend/dist/algor-academy"));
app.get("/*", function(req, res) {
  res.sendFile(
    path.join(__dirname + "../frontend/dist/algor-academy/index.html")
  );
});

var server = app.listen(port, () => {
  console.log("app running on port ", server.address().port);
});
