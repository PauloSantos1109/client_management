/* Model INTERFACE Employee */
/* This model content data contract of the struture DB */

export interface InputObjectEmployee {
    id: number;
    employee: string;
    cpf: string;
    dataOfBirth: Date;
    registrationDate: Date;
    office: string;    
}