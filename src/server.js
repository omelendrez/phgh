cont express = require('express');
cont path = require('path');
cont serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
cont port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);