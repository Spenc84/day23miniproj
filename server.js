var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
setHeaders = require('./middleware/middleware').setHeaders,
port = 9000;

app.use(bodyParser.json());
app.use(setHeaders);
require('./routes/routes.js')( app );

app.listen(port, function(){
  console.log("listening on " +port);
});
