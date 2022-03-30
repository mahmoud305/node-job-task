const express = require('express');
const app = express();
require("dotenv").config();
const dataBaseConnection=require("./dbConfig/dbConfig");
const taskRouter = require('./src/Task/Task.router');
const port = process.env.PORT || 5000;
app.use(express.json());
dataBaseConnection();

app.use(taskRouter);
 
 
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
