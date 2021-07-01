 const http = require('http');
 const fs = require('fs');

 const server = http.createServer((req, res) => {
    console.log(http.ClientRequest);

     // set content header
    res.setHeader("Content-Type", 'text/HTML');
   
    let path = './views/';
    switch(req.url) {
		case '/':
			res.statusCode = 200;
        	path += 'index.html';
        	break;
		case '/about':
			res.statusCode = 200;
			path += 'about.html';
			break;
		case '/blogs':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			break;
		default:
			res.statusCode = 404;
			path += '404.html';
			break;
    }

    // write the content
    fs.readFile(`${path}`, (err, data) => {
      if(err) {
        res.end("<p>ERROR! Cannot read HTML.</p>");
      }
      else {
        res.end(data);
      }
    });
 });

 server.listen(3000, 'localhost', () => {
    console.log("listening")
 });