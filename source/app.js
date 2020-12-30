const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/productCart", function(req,res){
    res.sendFile(__dirname + "/views/productCart.html");
});

app.get("/productDetail", function(req,res){
    res.sendFile(__dirname + "/views/productDetail.html");
});

app.get("/products", function(req,res){
    res.sendFile(__dirname + "/views/products.html");
});

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/views/register.html");
});


app.listen(3000, function(){console.log("Escuchando servidor 3000")});