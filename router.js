/**
 * Created by USER on 22/11/16.
 */


const handler = require('./handler');

var handle = handler.handle;



function Route(path,res,data) {

    console.log('GET req from : ' + path);

    if(typeof handle[path] === 'function'){
        handle[path](res,data);

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error:'+ path +'page not found ');
        res.end();
    }

}

exports.route = Route ;