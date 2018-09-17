var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
   res.render("home"); 
});

app.get('/drummers', function(req, res){
    res.render('drummers');
});

app.get('/guitarists', function(req, res){
   res.render('guitarists');
});

app.get("/registration", function(req, res){
   res.render('Registration');
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running !");
});