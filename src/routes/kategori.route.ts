import KategoriController from "../controllers/kategori.controller";
import { Request, Response, NextFunction } from "express";
import { Router } from "express"

const controller = new KategoriController();

const router = Router();

router.get('/kategori', (req: Request, res: Response, next: NextFunction) => {
    const { size, page } = req.query;
    if (size !== undefined && page !== undefined) {
        return controller.readLimitKategori(req, res, next);
    } else {
        return controller.readKategori(req, res, next);
    }
});

router.get('/kategori/:id', controller.readKategoriByID);

router.post('/kategori', controller.createKategori);

router.put('/kategori/:id', controller.updateKategori);

router.delete('/kategori/:id', controller.deleteKategori);

export default router;
