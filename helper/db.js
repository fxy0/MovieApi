const mongoose = require('mongoose');
module.exports = () =>{
    mongoose.connect('mongodb://roout:123456a@ds247637.mlab.com:47637/heroku_vjcdzsh1',{ useNewUrlParser: true})
    mongoose.connection.on('open',() =>{
        console.log("Mongo Connect");
    });
    mongoose.connection.on('error',(err) =>{
        console.log("Mongo Error");
    })


    mongoose.Promise = global.Promise;
}