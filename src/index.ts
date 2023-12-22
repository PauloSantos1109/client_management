import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
    clientName: string;
    cpf: string;
    dateOfBirth?: Date;
    registrationDate: Date;
    model: string;
    brand: string;
    licensePlate: string;
}

async function saveUserToDataBase(user: User) {
    try {
        const newClient = await prisma.cliente.create({
            data: user,
        });
        console.log("Novo cliente salvo:", newClient);
    } catch (error) {
        console.error(`Erro ao salvar o cliente ${error}`);
    } finally {
        await prisma.$disconnect();
    }
}

