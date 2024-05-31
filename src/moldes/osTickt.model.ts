/* Model INTERFACE Os Tickt */
/* This model content data contract of the struture DB */

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