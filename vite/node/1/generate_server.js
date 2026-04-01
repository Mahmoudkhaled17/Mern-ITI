import http from "http"

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    
    console.log("the request send")
    res.end("hello world")

}).listen(8080);