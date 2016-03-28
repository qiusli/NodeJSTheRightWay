var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('你好, 世界');
});
app.listen(3000, function() {
  console.log('app is listeing at port 3000');
});
