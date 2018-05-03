var http = require('http');

function onRequeat(request , response){
    console.log('a user made a request ' + request.url);
   // response.writeHead();
    response.writeHead(202,("context-Type" - "text/plain") );
    response.write("here is your respomnse mithilesh");
    response.end();
}
http.createServer(onRequeat).listen(8000);
console.log("mithilesh kumar server is running");