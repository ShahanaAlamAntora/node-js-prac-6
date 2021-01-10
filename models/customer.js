'use strict'
module.exports = function (sequelize,DataTypes)
{
var customer = sequelize.define('customer',{
    customer_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    customer_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    customer_email:{
    type:DataTypes.STRING,
    allowNull:false
    },

    customer_location:{
    type:DataTypes.STRING,
    allowNull:false
    },

    customer_postcode:{
    type:DataTypes.STRING,
    allowNull:false
    },

    customer_c_date:{
    type:DataTypes.DATE,
    allowNull:false
    },

    customer_mod_date:{
    type:DataTypes.DATE,
    allowNull:false
    },

     createdAt:{
    type:DataTypes.DATE,
    allowNull:false
    },

    updatedAt:{
    type:DataTypes.DATE,
    allowNull:false
    }

}

,{

freezeTableName: true,

}

)
return customer;
}