const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name:   {type:String, require:true},
    icon:   {type:String, require:true},
    menuUrl:    {type:String, require:true},
    entryDate:  {type:Date, default:Date.now}
})

let usersSchema = new mongoose.Schema({
    email:   {type:String, require:true},
    pwd:   {type:String, require:true},
    entryDate:  {type:Date, default:Date.now}
})

let menu = mongoose.model('menu', menuSchema, 'menu');
let users = mongoose.model('menu', menuSchema, 'users');
let mySchemas = {
    'menu' : menu,
    'users': users
}

module.exports = mySchemas