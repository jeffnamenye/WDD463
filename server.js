
var http = require('http');

var form = require('form');

//require the form filing system that is installed with nore.js
var fs = require('fs');

//directs server to my form page in html
var server = http.createServer(function (req, res){
  displayMyForm(res);
});
//loads html
function displamyMyForm(res){
  fs.readFile('form.html', function (err, data){
    res.writeHead(300,{
      'Content-Type' : 'text/html',
      'Content-Lenght' : data.length
    });
    res.write(data);
    res.end();
  });
}



server.listen(3000);
console.log('Server running on 3000');
