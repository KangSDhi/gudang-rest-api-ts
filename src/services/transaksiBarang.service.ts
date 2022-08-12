import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTransaksiMasuk = async (req: any, id_barang: string, id_pengguna: string) => {
    const { jumlah_barang } = req;
    const query = await prisma.transaksiBarang.create({
        data: {
            tanggal_masuk: new Date().getTime(),
            tanggal_keluar: null,
            jumlah_barang: jumlah_barang,
            barangId: id_barang,
            penggunaId: id_pengguna,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }
    });
    return query;
}