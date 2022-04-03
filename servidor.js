const http = require("http");
http.createServer((request, response)=>{
response.writeHead(200,{'Content-type':'text/plain'});
response.write('Seu servido esta no ar');
response.end();
}).listen(1337, ()=>{console.log('working')});

