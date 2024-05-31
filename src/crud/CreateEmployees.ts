import { PrismaClient, employees } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEmployee(employeeData: employees) {
    try {
        const newEmployee = await prisma.employees.create({
            data: employeeData,
        });
        return newEmployee;
    } catch (error) {
        console.error('Erro ao criar funcionário: ', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}