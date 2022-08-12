import { Request, Response, NextFunction } from "express";
import { createKategori, findAllKategori } from "../services/kategori.service";

export default class KategoriController {
    
    getKategori = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await findAllKategori();
            res.status(200).json({
                code: 200,
                status: "Berhasil",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }
    
    createKategori = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await createKategori(req.body);
            res.status(201).json({
                code: 201,
                status: "Berhasil Menambahkan Kategori",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

}