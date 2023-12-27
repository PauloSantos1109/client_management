import { PrismaClient, Cliente  } from "@prisma/client";

const prisma = new PrismaClient();

export async function createClient(clientData: Cliente) {
  try {
    const newClient = await prisma.cliente.create({
      data:clientData,
    });
    return newClient;
  } catch (error) {
    console.error('Erro ao criar cliente: ', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}