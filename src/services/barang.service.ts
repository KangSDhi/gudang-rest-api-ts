import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import iBarang from "../interface/barang.interface";

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
            },
            gambar_barang: true,
            createdAt: true,
            updatedAt: true
        }
    });
    return query;
}

export const findLimitBarang = async (req: any) => {
    const {  size, page } = req;
    const skip = size * ( page - 1);
    const query = await prisma.barang.findMany({
        skip: skip,
        take: size,
        include: {
            kategori: true
        }
    });
    return query;
}

export const findByIDBarang = async (req: any) => {
    const { id } = req;
    const query = await prisma.barang.findFirst({
        where: {
            id
        },
        include: {
            kategori: true
        }
    });
    return query;
}

export const createBarang = async (data: iBarang) => {
    const { nama_barang, jumlah_barang, deskripsi_barang, gambar_barang, kategoriId, createdAt, updatedAt } = data;

    const query = await prisma.barang.create({
        data: {
            nama_barang: nama_barang,
            jumlah_barang: jumlah_barang,
            deskripsi_barang: deskripsi_barang,
            gambar_barang: gambar_barang,
            kategori: {
                connect: {
                    id: kategoriId
                }
            },
            createdAt: createdAt,
            updatedAt: updatedAt
        }
    });
    return query;
}

export const updateBarang = async (req: any) => {
    const { id } = req.params;
    const { nama_barang, deskripsi_barang, kategoriId } = req.body;
    const query = await prisma.barang.update({
        where: {
            id: id
        },
        data: {
            nama_barang,
            deskripsi_barang,
            kategori: {
                connect: {
                    id: kategoriId
                }
            },
            updatedAt: new Date().getTime()
        }
    });
    return query;
}

export const deleteBarang = async (id: any) => {
    const query = await prisma.barang.delete({
        where: {
            id
        }
    });
    return query;
}