require('dotenv/config') //Definindo variavel de ambiente
require('./database')

const express = require('express')
const exprhbs = require('express-handlebars')

const app = express();

app.use(express.urlencoded({ extended: true })); //Url fica dentro do código
app.use(express.json()); //Aplicação consegue ler json
app.use(express.static('public')); //Aplicação é servida com o que esta na pasta public

app.engine('handlebars', exprhbs.engine()); //Registra qual o nome da engine e puxa a variavel encapsulada
app.set('view engine', 'handlebars'); //Defini qual a engine que vai montar as views 

const routes = require('./routes')
app.use(routes)

app.listen(3000);