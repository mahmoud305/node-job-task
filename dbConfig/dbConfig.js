const  mongoose  = require("mongoose");

const dataBaseConfig= ()=>{
    mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_LINK).
    then(console.log("DataBase connected successfully")).
    catch((error)=> console.log("error in dataBase Connection\n",error))
};
module.exports=dataBaseConfig;