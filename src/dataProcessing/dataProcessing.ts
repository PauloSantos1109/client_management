/* Interface */
interface InputObject {
  id: number; 
  clientName: string;
  cpf: string;
  dateOfBirth: Date;
  registrationDate: Date;
  model: string;
  brand: string;
  licensePlate: string;
}
  /* Customer name formatting */
  function formatClientName(clientName: string): string {
    return clientName.toLowerCase();
  }
  
  /* Formatting the customer's CPF */
  function formatCPF(cpf: string): string {
    return cpf.normalize('NFD').replace(/[\u0300-\u036f\W_]/g, '');
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
      return new Date
    }
  }
  /* Brand formatting */
  function formatBrand(brand: string): string {   
    return brand.toLocaleLowerCase();
  }
  /* Model Formatting */
  function formatModel(model: string): string {
    // Adicione lógica de formatação, se necessário
    return model.toLocaleLowerCase();
  }
  
  /* Validation of vehicle license plates in the Brazilian version */
  export function validateLicensePlate(licensePlate: string): string {
    try {
      // Remove whitespace and convert to uppercase
      const cleanedLicensePlate = licensePlate.replace(/\s/g, '').toUpperCase();
  
      // Check if the board has the expected structure for the first type (ABC1234)
      const format1Regex = /^[A-Z]{3}\d{4}$/;
  
      // Check if the board has the expected structure for the second type (ABC1D23)
      const format2Regex = /^[A-Z]{3}\d[A-Z]\d{2}$/;
  
      if (!(format1Regex.test(cleanedLicensePlate) || format2Regex.test(cleanedLicensePlate))) {
        throw new Error("Placa inválida.");
      }
  
      // If all validations pass, the card is considered valid
      return cleanedLicensePlate.toLocaleLowerCase();
    } catch (error) {
      // Throw an error if the card is invalid
      console.error(`Erro ao validar a placa: ${error}`);
      throw error;
    }
  }
  
export function sendToAPI(value: InputObject): InputObject {
  const outputObject = {
    id: value.id, 
    clientName: formatClientName(value.clientName),
    cpf: formatCPF(value.cpf),
    dateOfBirth: formatDateString(value.dateOfBirth),
    registrationDate: formatDateString(value.registrationDate),
    model: formatModel(value.model),
    brand: formatBrand(value.brand),
    licensePlate: validateLicensePlate(value.licensePlate),
  };

  // Retornar o objeto processado
  return outputObject;
}

  