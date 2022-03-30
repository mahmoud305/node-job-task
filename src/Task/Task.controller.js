const TaskModel = require("./Task.model");

 async function addTask(req,res){
    const {z}= req.body;
    try {
        console.log(z);
        // we could save the date from here by adding it to the new task object -  date:Date.now() - or make it from the data base equals to the current date by default.
        const newTask= new TaskModel({varX:{varY: z}}); // initialize the new Job
        // console.log(newTask);
        newTask.save(); // saving the new job without waiting for it to get the reposne directly.
        res.json({message:"success, job added successfully"}) // the data will be empty
    } catch (error) {
        res.status(500).json({message:"Failed",error});
    }
}

module.exports={addTask}