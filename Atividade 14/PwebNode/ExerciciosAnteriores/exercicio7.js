var http = require('http');
var server = http.createServer(function(req,res){
  var opcao = req.url;
  if(opcao=='/historia'){
    res.end("<html><body>History about FATEC SOROCABA</body></html>");
  }
  else if(opcao=='/courses'){
    res.end("<html><body>FATEC SOROCABA's courses</body></html>");
  }
  else if(opcao=='/professors'){
    res.end("<html><body>professores da Fatec Sorocaba  testes</body></html>");
  }
  else
    res.end("<html><body>FATEC Sorocaba's Website</body></html>");
  
  
});
server.listen(3000);