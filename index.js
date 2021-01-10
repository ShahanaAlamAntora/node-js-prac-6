const express = require('express')
const app = express()

var DB= require("./models/index");
var sequelize=DB.sequelize;

var customermodel=sequelize.models.customer;



app.get("/customer",function(req,res)
{
 customermodel.findAll().then( function(customer)
 {
res.send(customer);
 }).catch(function(err)
 {
 res.send(err)})
})

app.listen(3000);

app.listen(3000);