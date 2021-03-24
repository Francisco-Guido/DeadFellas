const express = require("express");
const app = express();
const path = require("path");
const middlewareEsUsuario = require('./middlewares/esUsuario');
var session = require('express-session');
const methodOverride = require('method-override');
const {check, validationResult, body} = require('express-validator');

//let port = process.env.PORT || 3000;

app.set ('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public') ));

app.use(session({secret: "Adloremipsum"}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(middlewareEsUsuario);
app.use(methodOverride('_method'));


const generalRouter = require('./routers/indexRouter');
const productsRouter = require('./routers/productsRouter');
const productsDetailRouter = require('./routers/productsDetailRouter');
const productsCartRouter = require('./routers/productsCartRouter');
const loginRouter = require('./routers/loginRouter')
const registerRouter = require('./routers/registerRouter');
const createProductRouter = require('./routers/createProductRouter');
const updateRouter = require('./routers/updateRouter');
const updateUserRouter = require('./routers/updateUserRouter');

app.use('/', productsRouter);
app.use('/', generalRouter);
app.use('/', productsDetailRouter);
app.use('/productsCart', productsCartRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/createProduct', createProductRouter);
app.use('/', updateRouter);
app.use('/', updateUserRouter);

const PORT = process.env.PORT || '8080'
app.set("port", PORT); 

app.listen(PORT, () => console.log('Server listening to port : ${PORT}'))


