import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPengguna = async (req: any) => {
    const { nama_pengguna } = req;
    const query = await prisma.pengguna.create({
        data: {
            nama_pengguna,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }
    });
    return query;
}