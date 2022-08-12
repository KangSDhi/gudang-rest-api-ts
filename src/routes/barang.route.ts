import BarangController from "../controllers/barang.controller";
import { Router } from "express";

const controller = new BarangController();

const router: Router = Router();

router.get('/barang', controller.getBarang);

router.post('/barang', controller.createBarang);

router.post('/barang/limit', controller.getLimitBarang);

export default router;