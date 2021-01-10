const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var customermodel = sequelize.models.customer;

route.get("/",function(req,res)
{
 customermodel.findAll().then( function(customer)
 {
res.send(customer);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id", function(req,res)
{
    customermodel.findOne(

    {where:{customer_id: req.params.id}}).then(function(result)
    {
    res.send(result);
    }).catch(function(error)
    {
    console.log(err);

    })
 })

route.post("/", function(req,res)
{

payload = {};
payload['customer_name'] = req.body.customer_name;
payload['customer_email'] = req.body.customer_email;
payload[' customer_location'] = req.body. customer_location;
payload[' customer_postcode'] = req.body. customer_postcode;
payload['customer_c_date'] = req.body.customer_c_date;
payload['customer_mod_date'] = req.body.customer_mod_date;

customermodel.create(payload).then(function(result)
{
res.send(result);
}).catch(function(err)
{

console.error(err);
res.send(err);
})
})

route.delete("/:id", function(req,res)
{
    customermodel.destroy(

    {where:{customer_id: req.params.id}}).then(function(result)
    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })
 })



exports = module.exports =route;