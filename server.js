const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("Hey Here is Dhruv Bhatt")
    res.end();
})

server.listen(8081,"127.0.0.1",()=>{
    console.log("Server is Listening Requests on Port 8081.");
})