import PenggunaController from "../controllers/pengguna.controller";
import { Router } from "express";

const controller = new PenggunaController();

const router = Router();

router.post('/pengguna', controller.createPengguna);

export default router;