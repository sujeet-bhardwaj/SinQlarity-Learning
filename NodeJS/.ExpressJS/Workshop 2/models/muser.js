const sequelizetype = require('sequelize')
const sequelize=require('../util/databse')

const User=sequelize.define('user',{
    id:{
         type:sequelizetype.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
    },
    name:
    {
         type:sequelizetype.STRING,
         allowNull:false
    },
    email:{
         type:sequelizetype.STRING,
         allowNull:false
    },
    password:{
         type:sequelizetype.STRING,
         allowNull:false
    },
    remark:sequelizetype.STRING,
       
   

})

module.exports=User;







