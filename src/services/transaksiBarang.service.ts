import { PrismaClient } from "@prisma/client";
import iTransaksi from "../interface/transaksiBarang.interface";

const prisma = new PrismaClient();

export const createTransaksiMasuk = async (data: iTransaksi) => {
    const { tanggal_masuk, jumlah_barang, barangId, penggunaId, createdAt, updatedAt } = data;
    const query = await prisma.transaksiBarang.create({
        data: {
            tanggal_masuk: tanggal_masuk,
            tanggal_keluar: null,
            jumlah_barang: jumlah_barang,
            barangId: barangId,
            penggunaId: penggunaId,
            createdAt: createdAt,
            updatedAt: updatedAt
        }
    });
    return query;
}