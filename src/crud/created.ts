// Import the PrismaClient and Cliente model from the Prisma client
import { PrismaClient, Cliente } from '@prisma/client';

// Create an instance of the PrismaClient
const prisma = new PrismaClient();

// Function to create a new client
export async function createClient(clientData: Omit<Cliente, 'id'>): Promise<Cliente> {
  // Use Prisma to create a new client with the provided data
  const newClient = await prisma.cliente.create({
    data: clientData,
  });

  // Return the newly created client
  return newClient;
}

// Function to get a client by ID
export async function getClientById(clientId: number): Promise<Cliente | null> {
  // Use Prisma to find a unique client based on the provided ID
  const client = await prisma.cliente.findUnique({
    where: { id: clientId },
  });

  // Return the found client (or null if not found)
  return client;
}

// Function to update a client by ID with partial data
export async function updateClient(clientId: number, updates: Partial<Cliente>): Promise<Cliente | null> {
  // Use Prisma to update a client based on the provided ID and partial updates
  const updatedClient = await prisma.cliente.update({
    where: { id: clientId },
    data: updates,
  });

  // Return the updated client (or null if not found)
  return updatedClient;
}

// Function to delete a client by ID
export async function deleteClient(clientId: number): Promise<Cliente | null> {
  // Use Prisma to delete a client based on the provided ID
  const deletedClient = await prisma.cliente.delete({
    where: { id: clientId },
  });

  // Return the deleted client (or null if not found)
  return deletedClient;
}

// Function to get all clients
export async function getAllClients(): Promise<Cliente[]> {
  // Use Prisma to find and return all clients
  const clients = await prisma.cliente.findMany();

  // Return the array of clients
  return clients;
}
