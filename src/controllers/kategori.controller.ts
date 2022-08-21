import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { 
    createKategori, 
    findAllKategori, 
    findLimitKategori, 
    findByIDKategori, 
    updateKategori, 
    deleteKategori 
} from "../services/kategori.service";
import { Logger } from "tslog";

const log: Logger = new Logger({ name: "KategoriController" });

export default class KategoriController {

    readKategori = async (req: Request, res: Response, next: NextFunction) => {
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

    readLimitKategori = async (req: Request, res: Response, next: NextFunction) => {
        const size: number = Number(req.query.size);
        const page: number = Number(req.query.page);
        const request = {
            size: size,
            page: page
        };
        try {
            const result = await findLimitKategori(request);
            const data = [];
            for (let index = 0; index < result.length; index++) {
                const id = result[index].id;
                const kode_kategori = result[index].kode_kategori;
                const nama_kategori = result[index].nama_kategori;
                const sub_kategori = result[index].sub_kategori;
                const createdAt = result[index].createdAt;
                const updatedAt = result[index].updatedAt;

                const container = {
                    id,
                    kode_kategori,
                    nama_kategori,
                    sub_kategori,
                    createdAt,
                    updatedAt
                };

                data.push(container);
            }

            res.status(200).json({
                code: 200,
                status: `Data Kategori Limit Halaman ${page} dan ${size} Data`,
                data: data
            });
        } catch (error) {
            next(error);   
        }
    }

    readKategoriByID = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await findByIDKategori(req.params);

            res.status(200).json({
                code: 200,
                status: "Data Kategori Ditemukan!",
                data: result
            })
        } catch (error) {
            res.status(404).json({
                code: 404,
                status: "Data Kategori Tidak Ditemukan!"
            });    
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

    updateKategori = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await updateKategori(req);
            res.status(201).json({
                code: 201,
                status: "Berhasil Mengupdate Kategori",
                data: result
            });   
        } catch (error) {
            next(error);
        }
    }

    deleteKategori = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await deleteKategori(req.params.id);
            res.status(200).json({
                code: 200,
                status: "Berhasil Menghapus Kategori"
            });   
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                let code: number;
                let status: string;
                log.info(error.code);
                if (error.code === "P2014") {
                    code = 403;
                    status = "Kategori Tidak Dapat Dihapus!"
                }else if(error.code === "P2025"){
                    code = 404;
                    status = "Kategori Yang Akan Dihapus Tidak Ditemukan!"
                }else{
                    code = 400;
                    status = "Error!"
                }

                res.status(code).json({
                    code: code,
                    status: status
                });
            }
        }
    }
}