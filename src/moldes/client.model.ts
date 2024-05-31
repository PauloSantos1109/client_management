/* Model INTERFACE Client */
/* This model content data contract of the struture DB */

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