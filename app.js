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
  res.redirect('/example4/page1.html');
});
    
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});