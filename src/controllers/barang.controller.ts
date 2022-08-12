import { Request, Response, NextFunction } from "express";
import { findAllBarang, findLimitBarang, createBarang } from "../services/barang.service";
import { createTransaksiMasuk } from "../services/transaksiBarang.service";

export default class BarangController {

    getBarang = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const result = await findAllBarang();
            res.status(200).json({
                code: 200,
                status: "Berhasil",
                data: result
            });
        }catch(error){
            next(error);
        }
        
    }

    getLimitBarang = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await findLimitBarang(req.body);
            res.status(200).json({
                code: 200,
                status: "Berhasil",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    createBarang = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { penggunaId } = req.body;
            const barang = await createBarang(req.body);
            const transaksiMasuk = await createTransaksiMasuk(barang, barang.id, penggunaId);
            console.log(transaksiMasuk);
            res.status(201).json({
                code: 201,
                status: "Berhasil Menambahkan Data",
                data: barang
            });
        } catch (error) {
            next(error);
        }
    }

    updateBarang = async () => {

    }

    deleteBarang = async () => {

    }

}