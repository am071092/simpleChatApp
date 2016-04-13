var http = require('http');
var url = require('url');
var messages = [];
var PORT_NUM = 1337;

var server = http.createServer(function (request, response) {
	var urlObj = url.parse(request.url, true);
	response.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*'
	});
	if (urlObj.pathname.substr(0, 5) === '/poll') {
		var count = urlObj.pathname.replace(/[^0-9]*/, '');
		if (count < messages.length) {
			response.end(JSON.stringify({
				count: messages.length,
				append: messages.slice(count).join('\n')
			}));
		}
	} else {
		var message = url.format(urlObj);
		messages.push(message + '\n');
		response.end();
	}
}).listen(PORT_NUM);