const express = require('express');
const path = require('path');
const logger = require('morgan');


const server = express();
const port = process.env.PORT || 8008;

//view conf
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

//logger
server.use(logger('dev'));

//static path
server.use(express.static(path.join(__dirname, 'public')));

// error handlers
//=============================================
// development error handler
// will print stacktrace
// export NODE_ENV=development for development
if (server.get('env') === 'development') {
  server.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// export NODE_ENV=production for production
server.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error/error', {
    message: err.message,
    error: {}
  });
});

//create HTTP server
// launch =======================================
server.listen(port);
console.log('The magic happens on port ' + port);
console.log(server.get('env'));