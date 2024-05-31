import express, { Router, Request, Response } from 'express';
import * as ClientCrud from '../crud/customer_Creation';
import * as Employee from '../crud/CreateEmployees';
import * as DataProcessing from '../dataProcessing/dataProcessingOfTheClient';
import { getDateClient, getDateEmployee } from '../crud/getData'


const router = Router();

// gets
router.get("/client/users", async (req, res) => {
  try {
    const clients = await getDateClient(); 
    res.json(clients); 

  } catch (error) {
    console.error('Erro na rota: ', error)
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

router.get("/employee/users", async (req, res) => {
  try {
    const employee = await getDateEmployee();
    res.json(employee)
    
  } catch (error) {
    console.error('Erro na rota: ', error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/* Post */

/* Route to process and record new customer data  */
router.post('/client', async (req: Request, res: Response) => {
  try {
    console.log('Recebida uma solicitação POST em /api/testpost');

    const processedData = DataProcessing.sendToAPI(req.body);
    console.log('Dados processados:', processedData);

    const newClient = await ClientCrud.createClient(processedData);
    res.json(newClient);
  } catch (error) {
    console.error('Erro ao processar a solicitação POST:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/employee', async (req: Request, res: Response) => {
  try {
    console.log('Recebida uma solicitação POST em /api/employee');

    const newEmployee = await Employee.createEmployee(req.body);
    res.json(newEmployee)
  } catch (error) {
    console.error('Erro ao processar a solicitação POST:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


export default router;