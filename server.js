/**
 * Created by USER on 22/11/16.
 */

const http = require('http');
const url  = require('url');
const qs   = require('querystring');



function Start(route) {
    var i = 1;

    const server = http.createServer((req, res) => {

        var data = '';
        var path = url.parse(req.url).pathname;

        req.setEncoding("utf8");

        req.on("data",(chunk) => {
            data += chunk ;
        });

        req.on("end",() => {
            Rdata = qs.parse(data);
            console.log("data: " + data);
            route(path,res,data);
        });


    }).listen(8080);

    server.on('clientError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });

    console.log('Server start at port localhost:8080' + " (req No: " + i+')');
    i++;

}

exports.Start = Start ;