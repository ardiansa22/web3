const express = require('express');
const mhsRouter=express.Router();

const mhsController = require("../controller/mhsController");

mhsRouter.get("/",mhsController.getData);
mhsRouter.post("/post",mhsController.postData);

module.exports=mhsRouter;