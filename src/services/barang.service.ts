import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

export const findAllBarang = async () => {
    const query = await prisma.barang.findMany({
        select: {
            id: true,
            nama_barang: true,
            jumlah_barang: true,
            deskripsi_barang: true,
            kategori: {
                select: {
                    kode_kategori: true,
                    nama_kategori: true,
                    sub_kategori: true
                }
            }
        }
    });
    return query;
}

export const findLimitBarang = async (req: any) => {
    const { size, page } = req;
    const skip = size * ( page - 1);
    const query = await prisma.barang.findMany({
        skip: skip,
        take: size
    });
    return query;
}

export const createBarang = async (req: any) => {
    const { nama_barang, jumlah_barang, deskripsi_barang, kategoriId } = req;
    const query = await prisma.barang.create({
        data: {
            nama_barang: nama_barang,
            jumlah_barang: jumlah_barang,
            deskripsi_barang: deskripsi_barang,
            kategori: {
                connect: {
                    id: kategoriId
                }
            },
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }
    });
    return query;
}