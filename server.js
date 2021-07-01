 const http = require('http');

 const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

     // set content header
    res.setHeader("Content-Type", 'text/plain');

    // write the content
    res.write("Hello Human!");
    
    // end
    res.end();
 });

 server.listen(3000, 'localhost', () => {
    console.log("listening")
 });