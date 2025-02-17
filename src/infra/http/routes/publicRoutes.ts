import { Router } from "express";
import { createController } from "../controller/userController/create.controller";
import { findByEmailController } from "../controller/userController/findByEmail.controller";

const createUser = new createController();
const findByEmail = new findByEmailController();

const publicRoutes = Router();

publicRoutes.post("/", createUser.create);



publicRoutes.get("/" ,(req,res) => {
res.status(200).json({message:"voce esta na rota home"})
})


publicRoutes.post("/findByEmail", findByEmail.findByEmail);

export { publicRoutes };
