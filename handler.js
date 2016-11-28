/**
 * Created by USER on 22/11/16.
 */

const fs = require('fs');


function home(res,data) {
    console.log('Home handler!');
    fs.readFile('views/home.html', (err, html) => {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
   });
}

function review(res ,data) {
    console.log('Review handler!');
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("<h1>Your review is: </h1>" + '<strong>'+ data +'</strong>>');

    res.end();

}



/*exports.home = home;
exports.review = review;*/


var handle ={
    "/"      : home ,
    "/home"  : home,
    "/review": review
};

exports.handle = handle ;