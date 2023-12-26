import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createClient(clientData: {
  clientName: string;
  cpf: string;
  dateOfBirth?: Date;
  registrationDate: Date;
  model: string;
  brand: string;
  licensePlate: string;
  // ... outros campos necessários
}) {
  try {
    const newClient = await prisma.cliente.create({
      data: clientData,
    });
    console.log('Novo Cliente:', newClient);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exemplo de uso:
const newClientData = {
  clientName: 'Nome do Cliente',
  cpf: '123.456.789-01',
  dateOfBirth: new Date(),
  registrationDate: new Date(),
  model: 'Modelo do Cliente',
  brand: 'Marca do Cliente',
  licensePlate: 'ABC123',
  // ... outros campos necessários
};

createClient(newClientData);
