var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
   res.send("This is root page "); 
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running !");
});