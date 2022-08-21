import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllKategori = async () => {
    const query = await prisma.kategori.findMany({});
    return query;
}

export const findLimitKategori = async (req: any) => {
    const { size, page } = req;
    const skip = size * ( page - 1);
    const query = await prisma.kategori.findMany({
        skip: skip,
        take: size
    });
    return query;
}

export const findByIDKategori =async (req: any) => {
    const { id } = req;
    const query = await prisma.kategori.findFirst({
        where: {
            id
        }
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

export const updateKategori = async (req: any) => {
    const { id } = req.params;
    const { kode_kategori, nama_kategori, sub_kategori } = req.body;

    const query = await prisma.kategori.update({
        where: {
            id: id
        },
        data: {
            kode_kategori: kode_kategori,
            nama_kategori: nama_kategori,
            sub_kategori: sub_kategori,
            updatedAt: new Date().getTime()
        },
        select: {
            id: true,
            kode_kategori: true,
            nama_kategori: true,
            sub_kategori: true,
            updatedAt: true
        }
    });

    return query;
}

export const deleteKategori = async (id: any) => {
    const query = await prisma.kategori.delete({
        where: {
            id: id
        }
    });

    return query;
}