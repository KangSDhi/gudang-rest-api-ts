import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllKategori = async () => {
    const query = await prisma.kategori.findMany({
        // include: {
        //     barang: true
        // }
    });
    return query;
}


export const createKategori = async (req: any) => {
    const { kode_kategori, nama_kategori, sub_kategori } = req;
    const query = await prisma.kategori.create({
        data: {
            kode_kategori,
            nama_kategori,
            sub_kategori,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }
    });
    return query;
}