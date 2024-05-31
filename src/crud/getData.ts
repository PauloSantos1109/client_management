import { PrismaClient } from "@prisma/client";
import { Cliente, employees, OSTickt } from "@prisma/client";

const prisma = new PrismaClient();
 
/* this code go back data of the dataBase CLIENT DATABASE */
export async function getDateClient() {
    try {
        const getClient = await prisma.cliente.findMany();

        const client = getClient.map((value) => ({
            id: value.id,
            clientName: value.clientName,
            cpf: value.cpf,
            dateOfBirth: value.dateOfBirth,
            model: value.model,
            licensePlate: value.licensePlate
        }));
        return client;
        
    } catch (error) {
        console.error('Erro ao trazer dados do banco de dados', error)
    } finally {
        await prisma.$disconnect
    }
}
/* this code go back data of the dataBase CLIENT EMPLOYEES */
export async function getDateEmployee() {
    try {
        const getDataEmployee = await prisma.employees.findMany()
        
        const employee = getDataEmployee.map((value) => ({
            id: value.id,
            employee: value.employee,
            cpf: value.cpf,
            dataOfBirth: value.dateOfBirth,
            registrationDate: value.registrationDate,
            office: value.office        
        }))
        return employee;
    } catch (error) {
        console.error('Erro ao trazer dados do banco de dados', error)
    } finally {
        await prisma.$disconnect
    }
}
/* this code go back data of the dataBase CLIENT OSTICKT */
/* export async function getDateOsTicket( OSTicktData: OSTickt ) {
    
} */