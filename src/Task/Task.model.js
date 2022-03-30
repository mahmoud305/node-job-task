const  mongoose = require("mongoose");
const taskSchema  = require("./Task.schema");
 
const taskModel= mongoose.model("task" ,taskSchema);
module.exports= taskModel;