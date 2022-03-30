const { default: mongoose } = require("mongoose");
//  i use nested path to handle the nested fields - there is another method which is subDocuments = varX: new Schema({varY:String}) 
const taskSchema= mongoose.Schema({
    varX:{
        varY:{type: String , required:true }
    },
    date:{ type:Date , default:Date.now()}

},
/*{
    timestamps: true // we can use it instead of date field .
}*/
)

module.exports=taskSchema;
//89201784