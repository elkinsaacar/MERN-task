/*const mongoose = require('mongoose');

// mongodb+srv://elkin:<password>@mern-task.womyq.mongodb.net/<dbname>?retryWrites=true&w=majority
const URI = 'mongodb+srv://elkin:12345@mern-task.womyq.mongodb.net/tareas?retryWrites=true&w=majority';

mongoose.connect( URI )
    .then( db => console.log("DB Conectada") )
    .catch( error => console.error(error) );

module.exports = mongoose; */

/*
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://elkin:12345@mern-task.womyq.mongodb.net/tareas?retryWrites=true&w=majority';

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
    if(error) {
        //return console.log('Unable to connet to DB')
        return console.log( error );
    }
    console.log('DB Conectada !!!')
})

module.exports = mongodb;
*/

const mongoose = require('mongoose');
const URI = 'mongodb+srv://elkin:12345@mern-task.womyq.mongodb.net/tareas?retryWrites=true&w=majority';
//const URI = 'mongodb+srv://elkin:12345@mern-task.womyq.mongodb.net/tareas';

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  //console.log("MongoDB database connection established successfully");
  console.log('DB Conectada !!!')
});

module.exports = mongoose;