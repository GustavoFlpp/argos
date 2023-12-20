import express from "express";
import { getEquipamento, getDispositivo } from "../controllers/user.js";

const router = express.Router()

router.get("/equipamento", getEquipamento);

router.get("/dispositivo", getDispositivo);


export default router