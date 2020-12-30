const express = require("express");
const app = express();
const path = require("path");

// Vamos a usar como motor de vistas -> EJS
app.set ('view engine', 'ejs')

app.set('views', path.join(__dirname, './views'));

const generalRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const productsDetailRouter = require('./routers/productsDetail');
const productsCartRouter = require('./routers/productsCart');
const LoginRouter = require('./routers/login')
const registerRouter = require('./routers/register');

app.use(express.static( path.join(__dirname, '../public') ));

app.use('/products', productsRouter);
app.use('/', generalRouter);
app.use('/productsDetail', productsDetailRouter);
app.use('/productsCart', productsCartRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);



app.listen(3000, function(){
    console.log("Escuchando servidor 3000")
});






/* app.use(express.static(path.join(__dirname, 'public')));


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
}); */