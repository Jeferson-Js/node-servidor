const http = require("http");
http.createServer((req, res)=>{
res.writeHead(200,{'Content-type':'text/plain'});
res.write('Seu servido esta no ar');
res.end();
}).listen(1337, ()=>{console.log('working')});


