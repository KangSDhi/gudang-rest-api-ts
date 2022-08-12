import { Request, Response, NextFunction } from "express";
import { createPengguna } from "../services/pengguna.service";

export default class PenggunaController {
    
    createPengguna = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await createPengguna(req.body);
            res.status(201).json({
                code: 201,
                status: "Berhasil Membuat Pengguna!",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

}