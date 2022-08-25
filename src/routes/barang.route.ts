import barangController from "../controllers/barang.controller";
import { Router, Request, Response, NextFunction, request } from "express";
import { body, check } from "express-validator";
import upload from "../helpers/multer";

const router: Router = Router();

const controller = new barangController();

router.get('/barang', (req: Request, res: Response, next: NextFunction) => {
    const { size, page } = req.query;    
    if(size !== undefined && page !== undefined){
        return controller.readBarangLimit(req, res, next);
    }else{
        return controller.readBarang(req, res, next);
    }
});

router.get('/barang/:id', controller.readBarangByID);

router.post('/barang', 
    [
        upload.array('foto', 5),
        check('nama_barang')
            .notEmpty()
            .withMessage('Mohon Isi Nama Barang!'),
        check('jumlah_barang')
            .notEmpty()
            .withMessage('Mohon Isi Jumlah Barang!')
            .isNumeric()
            .withMessage('Mohon Isi Jumlah Barang Dengan Angka!'),
        check('deskripsi_barang')
            .notEmpty()
            .withMessage('Mohon Isi Deskripsi Barang!'),
        check('kategoriId')
            .notEmpty()
            .withMessage('Mohon Isi Kategori ID!'),
        check('penggunaId')
            .notEmpty()
            .withMessage('Mohon Isi Pengguna ID!')
    ],controller.createBarang);

router.put('/barang/:id', controller.updateBarang);

router.delete('/barang/:id', controller.deleteBarang);

router.put('/barang/:id', controller.updateBarang);

router.delete('/barang/:id', controller.deleteBarang);

export default router;