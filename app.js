//caratteristiche server
var http = require("http"); //oggetto che permette la creazione di elementi che si affacciano sul web

var hostname = "127.0.0.1";
var port = 3000;

//server risponde
var server =  http.createServer((req, res) => {
    res.statusCode = 200;//pacchetto conferma
    res.setHeader("content-Type", "text/plain");//nel momento della risposta manda una risposta di tipo text/plain
    res.end("Ciao Belloccio!");//server risponde al client
});

//azione di ascolto
server.listen(port, hostname, () => {
    console.log('server running at http://%s:%d/');
});