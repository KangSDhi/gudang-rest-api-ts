import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { validationResult } from "express-validator";
import { 
    createBarang, 
    findAllBarang, 
    findLimitBarang,
    findByIDBarang,
    updateBarang,
    deleteBarang 
} from "../services/barang.service";
import { createTransaksiMasuk } from "../services/transaksiBarang.service";
import iBarang from "../interface/barang.interface";
import iTransaksi from "../interface/transaksiBarang.interface"
import { Logger } from "tslog";

const log: Logger = new Logger({ name: "BarangController" });

class BarangController {

    readBarang = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await findAllBarang();
            const data = [];
            for (let index = 0; index < result.length; index++) {
                const id = result[index].id;
                const nama_kategori = result[index].kategori.nama_kategori;
                const nama_barang = result[index].nama_barang;
                const jumlah_barang = result[index].jumlah_barang;
                const deskripsi_barang = result[index].deskripsi_barang;
                const gambar_barang = result[index].gambar_barang;
                const createdAt = result[index].createdAt;
                const updatedAt = result[index].updatedAt;

                const container = {
                    id,
                    nama_kategori,
                    nama_barang,
                    jumlah_barang,
                    deskripsi_barang,
                    gambar_barang,
                    createdAt,
                    updatedAt
                };

                data.push(container);
            }

            res.status(200).json({
                code: 200,
                status: 'Load All Data Barang',
                data: data
            });
        } catch (error) {
            next(error);
        }
    }

    readBarangLimit = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const size: number = Number(req.query.size);
            const page: number = Number(req.query.page);
            const request = {
                size: size,
                page: page
            }; 
            const result = await findLimitBarang(request);
            const data  = [];
            for (let index = 0; index < result.length; index++) {
                const id = result[index].id;
                const nama_kategori = result[index].kategori.nama_kategori;
                const nama_barang = result[index].nama_barang;
                const jumlah_barang = result[index].jumlah_barang;
                const deskripsi_barang = result[index].deskripsi_barang;
                const gambar_barang = result[index].gambar_barang;
                const createdAt = result[index].createdAt;
                const updatedAt = result[index].updatedAt;
                const container = {
                    id,
                    nama_kategori,
                    nama_barang,
                    jumlah_barang,
                    deskripsi_barang,
                    gambar_barang,
                    createdAt,
                    updatedAt
                };
                data.push(container);
            }
            
            res.status(200).json({
                code: 200,
                status: "Load Barang Limit",
                data: data
            })
        } catch (error) {
            next(error);
        }
    }
    
    readBarangByID = async (req: Request, res: Response, next: NextFunction) => {

        interface idata {
            id?: string,
            nama_kategori?: string,
            nama_barang?: string,
            jumlah_barang?: number,
            deskripsi_barang?: string,
            gambar_barang?: Array<any>,
            createdAt?: number,
            updatedAt?: number
        }

        try {
            const result = await findByIDBarang(req.params);
            
            const data: idata = { 
                id: result?.id,
                nama_barang: result?.nama_barang,
                nama_kategori: result?.kategori.nama_kategori,
                jumlah_barang: result?.jumlah_barang,
                deskripsi_barang: result?.deskripsi_barang,
                gambar_barang: result?.gambar_barang,
                createdAt: result?.createdAt,
                updatedAt: result?.updatedAt
            };

            res.status(200).json({
                code: 200,
                status: "Data Barang Ditemukan",
                data: data
            });
        } catch (error) {
            next(error);
        }
    }
    
    createBarang = async(req: Request, res: Response, next: NextFunction) => {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = [];
            for (let i = 0; i < errors.array().length; i++) {
                const param = errors.array()[i].param;
                const msg = errors.array()[i].msg;
                const er = {
                    param: param,
                    message: msg
                };
                error.push(er);
            }
        
                
            return res.status(400).json({
                code: 400,
                status: "Terjadi Kesalahan Validasi",
                errors: error
            });
        }

        try{
            const files = req.files as Express.Multer.File[];
            const images: string[] = [];

            if(files !== undefined){
                for (let index = 0; index < files.length; index++) {
                    const filename = files[index].filename.split("/")[1];
                    images.push(filename);
                }
            }

            const dataBarang: iBarang = {
                nama_barang: req.body.nama_barang as string,
                jumlah_barang: Number(req.body.jumlah_barang) as number,
                deskripsi_barang: req.body.deskripsi_barang as string,
                gambar_barang: images,
                kategoriId: req.body.kategoriId as string,
                createdAt: new Date().getTime() as number,
                updatedAt: new Date().getTime() as number
            };

            const result = await createBarang(dataBarang);

            const dataTranskasi: iTransaksi = {
                tanggal_masuk: Number(req.body.tanggal_masuk) as number,
                jumlah_barang: Number(req.body.jumlah_barang) as number,
                barangId: result.id,
                penggunaId: req.body.penggunaId,
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime()
            };

            await createTransaksiMasuk(dataTranskasi);
            
            res.status(201).json({
                code: 201,
                status: "Berhasil Menambahkan Barang",
                data: result
            });
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                log.info(error.code);
                let code: number;
                let status: string;
                code = 500;
                status = "Server Error";
                res.status(code).json({
                    code,
                    status
                });
            }
        }
    }

    updateBarang = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await updateBarang(req);
            res.status(201).json({
                code: 201,
                status: "Berhasil Mengubah Barang",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    deleteBarang = async(req: Request, res: Response, next: NextFunction) => {
        try {
            await deleteBarang(req.params.id);
            res.status(200).json({
                code: 200,
                status: "Berhasil Menghapus Barang"
            });
        } catch (error) {
            next(error);
        }
    }
}

export default BarangController;