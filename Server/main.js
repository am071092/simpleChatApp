var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var message = url.format(url.parse(request.url, true));
    var body = [];
    //    request.on('data', function (chunk) {
    //        body.push(chunk);
    //    }).on('end', function () {
    //        body = Buffer.concat(body).toString();
    //    })
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    response.end("From Server" + message);
}).listen(1337);