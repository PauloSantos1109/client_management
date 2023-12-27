import express, { Router, Request, Response } from 'express';
import * as ClientCrud from '../crud/customer_Creation';
import * as DataProcessing from '../dataProcessing/dataProcessing';

const router = Router();

// test route
router.get("/teste", (req, res) => {
  console.log('Test performed');
  res.send('Test performed');
  res.send('<p>TESTE</p>')
});

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



export default router;