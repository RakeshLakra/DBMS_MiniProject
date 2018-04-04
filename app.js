var express = require("express");
var app = express();
var mysql = require("mysql");

// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + "/public"));
// connection to database;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iiita123",
    //database: "exam"
});

con.connect(function(err){
	if(err){
			throw err;
	}
	console.log(" connected to mysql...")
});

app.get('/createdb',function(req,res){
	let sql = 'CREATE DATABASE new';
	con.query(sql,function(err,result){
		if(err) throw err;
		console.log(result);
		res.send('daatabase created...')
	})
})

app.listen(3000, function () {
    console.log("Server initiated!");
});
