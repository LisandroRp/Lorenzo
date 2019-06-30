// Importo express
var express = require('express');
// Importo Body Parser
var bodyParser = require('body-parser');
var cors = require('cors');
// Inicializo el server express
var app = express();

// Importo driver
var mongoose = require('mongoose');
// Conectar BD
var urlBD = 'mongodb://localhost/dbEventos';
// Opciones conexion
var opts = {useNewUrlParser:true, connectTimeoutMS:20000};

//Pruebo conexion
mongoose.connect(urlBD,opts).then
(
    () => {
            mongoose.Promise = global.Promise;
            console.log("Conectado a dbEventos!!");
          }, //se conecto
    err => { 
            console.log("ERROR:" + err); 
           } //manejo error
);

// Setup server port
var port = process.env.PORT || 8080;

// Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Importo router
var apiRoutes = require("./api-routes")
// Uso Api routes en App
app.use('/apiAppEventos', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Ejecutando en el puerto " + port);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Backend Activo'));

/************ Test ***********/
var Evento = require('./model/Evento');

var lollaEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Lolla Palooza',
    descripcion:'Terrible festival....',
    fecha: '24/03/20',
    tipo:'Festival',
    idUsuarioPropietario:'Time4Fun',
    duracion:'3 Dias',
    genero:'Variado',
    imagen:'https://www.radiocantilo.com/wp-content/uploads/2018/03/descarga.png',
    rating:5,
    personas:50000,
    precioE:2500,
    ubicacion: 'Hipodromo de San Isidro',
    latitude:'-58.507587',
    longitude:'-34.480023'
});

lollaEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+lollaEvento.nombre+' guardado con exito.');
});

var disneyEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Disney on Ice',
    descripcion:'Conquista tus Sueños',
    fecha:'26/07/20',
    tipo:'Show',
    idUsuarioPropietario:'Disney',
    duracion:'2 Horas',
    genero:'Infantil',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkzHiLqaw3MedLtDd7EPKBlqhPW1IJE9jRFC1je3lLo79mDQ-',
    rating:5,
    precioE:850,
    ubicacion:'Luna Park',
    latitude:'-58.368697',
    longitude:'-34.602055'
});

disneyEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+disneyEvento.nombre+' guardado con exito.');
});

var wweEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'WWE Live Buenos Aires',
    descripcion:'Las estrellas de WWE regresan a Argentina!',
    fecha:'06/09/20',
    tipo:'Show',
    idUsuarioPropietario:'WWE',
    duracion:'2 Horas',
    genero:'Pelea',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkzHiLqaw3MedLtDd7EPKBlqhPW1IJE9jRFC1je3lLo79mDQ-',
    rating:3.5,
    precioE:1000,
    ubicacion:'Luna Park',
    latitude:'-58.368697',
    longitude:'-34.602055'
});

wweEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+wweEvento.nombre+' guardado con exito.');
});

var tiniEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Tini Quiero Volver Tour',
    descripcion:'Tini llega al Luna Park para presentar su segunda gira "Quiero Volver Tour"',
    fecha:'18/10/20',
    tipo:'Recital',
    idUsuarioPropietario:'Time4Fun',
    duracion:'2 Horas',
    genero:'Pop',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkzHiLqaw3MedLtDd7EPKBlqhPW1IJE9jRFC1je3lLo79mDQ-',
    rating:4.5,
    precioE:700,
    ubicacion:'Luna Park',
    latitude:'-58.368697',
    longitude:'-34.602055'
});

tiniEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+tiniEvento.nombre+' guardado con exito.');
});

var saboresEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Caminos y Sabores 15º Edicion',
    descripcion:'El Mercado de los sabores, la Cultura y la Identidad Argentina',
    fecha:'06/07/20',
    tipo:'Feria',
    idUsuarioPropietario:'Ciudad BA',
    duracion:'2 Horas',
    genero:'Gastronomia',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkzHiLqaw3MedLtDd7EPKBlqhPW1IJE9jRFC1je3lLo79mDQ-',
    rating:4.5,
    precioE:700,
    ubicacion:'La Rural, Palermo',
    latitude:'-58.420584',
    longitude:'-34.578170'
});

saboresEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+saboresEvento.nombre+' guardado con exito.');
});

var aladinEvento = new Evento({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Aladin Sera Genial',
    descripcion:'Despedida en vacaciones de invierno!',
    fecha:'30/06/20',
    tipo:'Show',
    idUsuarioPropietario:'Mp Producciones',
    duracion:'2 Horas',
    genero:'Infantil',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkzHiLqaw3MedLtDd7EPKBlqhPW1IJE9jRFC1je3lLo79mDQ-',
    rating:3.5,
    precioE:450,
    ubicacion:'Teatro Gran Rex',
    latitude:'-58.378877',
    longitude:'-34.603114'
});

aladinEvento.save(function(err) {
    if (err) throw err;
        
    console.log('Evento '+aladinEvento.nombre+' guardado con exito.');
});

var Usuario = require('./model/Usuario');

/*var usuario1 = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Gonzalo',
    apellido:'Fernandez',
    username:'gonza_fer',
    email:'gonza89@gmail.com',
    password:'12345678'
});

usuario1.save(function(err) {
    if (err) throw err;
        
    console.log('Usuario guardado con exito.');
});

var usuario2 = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Matias',
    apellido:'Pepe',
    username:'matu_pe',
    email:'matu_pe@gmail.com',
    password:'12345678'
});

usuario2.save(function(err) {
    if (err) throw err;
        
    console.log('Usuario guardado con exito.');
});*/

var usuario3 = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre:'Susana',
    apellido:'Coronel',
    username:'susicoronel',
    email:'susicoronel@gmail.com',
    password:'12345678'
});

usuario3.save(function(err) {
    if (err) throw err;
        
    console.log('Usuario guardado con exito.');
});

var Comentario = require('./model/Comentario'); 

var comentario1 = new Comentario({
    nombreE: lollaEvento.nombre,
    descripcion:'Buen evento, muy divertido',
    usuarioId:'matu_pe',
    eventoId: lollaEvento._id
});

comentario1.save(function(err) {
    if (err) throw err;
        
    console.log('Comentario guardado con exito.');
});

var comentario2 = new Comentario({
    nombreE: lollaEvento.nombre,
    descripcion:'Estuvo terrible!! Vuelvo el año que viene...',
    usuarioId:'gonza_fer',
    eventoId: lollaEvento._id
});

comentario2.save(function(err) {
    if (err) throw err;
        
    console.log('Comentario guardado con exito.');
});

var comentario3 = new Comentario({
    nombreE: saboresEvento.nombre,
    descripcion:'Excelente feria. Muchas ofertas gastronomicas. Super recomendable',
    usuarioId:'susicoronel',
    eventoId: saboresEvento._id
});

comentario3.save(function(err) {
    if (err) throw err;
        
    console.log('Comentario guardado con exito.');
});