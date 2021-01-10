'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('customer',{

    customer_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },

    customer_name:{
    type:Sequelize.STRING,
    allowNull:false
    },

    customer_email:{
    type:Sequelize.STRING,
    allowNull:false
    },

    customer_location:{
    type:Sequelize.STRING,
    allowNull:false
    },

    customer_postcode:{
    type:Sequelize.STRING,
    allowNull:false
    },

    customer_c_date:{
    type:Sequelize.DATE,
    allowNull:false
    },

    customer_mod_date:{
    type:Sequelize.DATE,
    allowNull:false
    },

    createdAt:{
    type:Sequelize.DATE,
    allowNull:false
    },

    updatedAt:{
    type:Sequelize.DATE,
    allowNull:false}

    }

)



  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('customer');
  }
};
