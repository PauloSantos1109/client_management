import { InputObjectEmployee } from "../model/model";

function formatEmployee(employee: string): string {
    return employee.toLocaleLowerCase();
}

function formatCPF(cpf: string): string {
    return cpf.normalize('NFC').replace(/[\u0300-\u036f\W_]/g, '');
}

/* Date formatting */
function formatDateString(dateString: Date): Date {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            throw new Error("Data inválida.");
        }
        return date;
    } catch (error) {
        console.error(`Erro ao formatar a data: ${error}`);
        return new Date();
    }
}

export function sendToAPIEmployee(value: InputObjectEmployee): InputObjectEmployee {
    
    const outputObject: InputObjectEmployee = {
        id: value.id,
        employee: formatEmployee(value.employee),
        cpf: formatCPF(value.cpf),
        dataOfBirth: formatDateString(value.dataOfBirth),
        registrationDate: formatDateString(value.registrationDate),
        office: value.office,
    };

    return outputObject;
}
