const  taskRouter = require("express").Router() ;
const validatRequest = require("../Validation/validateRequest");
const { addTask } = require("./Task.controller");
const { addTaskValidation } = require("./Task.JoiValidation");


taskRouter.post("/addTask" , validatRequest(addTaskValidation),addTask);


module.exports=taskRouter;
