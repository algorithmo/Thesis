/**
 * Created by USER on 22/11/16.
 */

const  eventEmitter = require('events')
const  server       = require("./server");
const  router       = require('./app/router');
const  favicon      = require('serve-favicon');


favicon('favicon.ico')
server.Start(router.route);






/*class MyEmitter extends  eventEmitter{}


var event = new MyEmitter();


var ring = () => {console.log("Hello server");}

event.on("start",ring);
//event.emit('start');*/
