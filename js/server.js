var express = require('express');

var server = express();

server.use( express.static( 'www' ) );

server.listen( process.env.PORT || 8000, process.env.IP || '127.0.0.1', () => console.log('👍🏻') );
