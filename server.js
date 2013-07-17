var express = require("express")
  , app = express()
  , oneDay = 86400000
;

app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/build', { maxAge: oneDay }));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var app = express();
