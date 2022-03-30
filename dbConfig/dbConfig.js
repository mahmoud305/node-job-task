const  mongoose  = require("mongoose");

const dataBaseConfig= ()=>{
    mongoose.connect(process.env.DATABASE_CONNECTION_LINK).
    then(console.log("DataBase connected successfully")).
    catch((error)=> console.log("error in dataBase Connection\n",error))
};
module.exports=dataBaseConfig;