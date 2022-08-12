import KategoriController from "../controllers/kategori.controller";
import { Router } from "express"

const controller = new KategoriController();

const router = Router();

router.post('/kategori', controller.createKategori);

router.get('/kategori', controller.getKategori);

export default router;
