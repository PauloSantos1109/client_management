
/* Model INTERFACE Client */
export interface InputObjectClient {
    id: number; 
    clientName: string;
    cpf: string;
    dateOfBirth: Date;
    registrationDate: Date;
    model: string;
    brand: string;
    licensePlate: string;
}

/* Model INTERFACE Employee */
export interface InputObjectEmployee {
    id: number;
    employee: string;
    cpf: string;
    dataOfBirth: Date;
    registrationDate: Date;
    office: string;    
}

/* Model INTERFACE OsTickt */

export interface InputObjectOSTickt {
    id: number;
    osNumber: number;
    title: string;
    descricao: string;
    registrationDate?: Date;
    status: boolean;
    clientName?: string;
    model: string;
    brand: string;
}

