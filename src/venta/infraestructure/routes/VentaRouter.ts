import express from "express";

import { AddVentaController } from "../controllers/addVentaController";

export const ventaRouter= express.Router();

ventaRouter.post("/",AddVentaController.arguments.bind(AddVentaController))