
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , lucky = require('./routes/lucky')  
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , crypto = require('crypto')
  , bigunit = require('biguint-format');

var app = express();

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.home);
app.get('/index.html', routes.home);
app.post('/lucky', urlencodedParser, lucky.reply);
app.get('/cookie',function(req, res){
    res.cookie('moon' , 'cookie_value').send('Cookie is set');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server version "' + app.get('env') +
		  '" listening on port '  + app.get('port'));
});
