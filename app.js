let express = require('express'),
    http = require('http'),
    path = require('path'),
    errorhandler = require('errorhandler');
    
let app = express();
    
app.set('port', 3000);
    
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});
    
app.use(express.static(path.join(__dirname, 'client')));
    
app.use(errorhandler());

app.get('/json', function (req, res) {
  let result = {
    value: 'This is the value'
  };

  res.send(result);
})

app.post('/handle-post',function(req, res){
  //res.type('text/html');
  //res.send("<html><body><script>location.replace('/example4/page1.html');</script></body>");

  let page = req.query.page;

  if (page !== 'html') {
    let url = (page == '1')? '/example4/page1.html' : '/example4/page2.html';
    res.redirect(url);
    
    return;
  }

  res.send('<html><body style="background-color: red"></body></html>');
});
    
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});