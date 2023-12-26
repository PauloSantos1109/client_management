// Em route.ts
// routes.ts
import express, { Router, Request, Response } from 'express';
import * as ClientCrud from '../crud/created';


const router = Router();

// Rota de teste
router.get("/teste", (req, res) => {
    console.log('Test performed');
    res.send('Test performed');
    res.send('<p>TESTE</p>')
});

router.post('/client', async (req: Request, res: Response) => {
  try {

    console.log('Recebida uma solicitação POST em /api/testpost');
    // Código da sua função createClient
    
    const newClient = await ClientCrud.createClient(req.body);
    
    console.log(req.body)
    res.json(newClient);
 
  } catch (error) {

    console.error('Erro ao processar a solicitação POST:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;
































/* router.post('/testpost', async (req: Request, res: Response) => {
  try {
    console.log('Recebida uma solicitação POST em /api/testpost');
    // Código da sua função createClient
    const newClient = await ClientCrud.createClient(req.body);
    res.json(newClient);
  } catch (error) {
    console.error('Erro ao processar a solicitação POST:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Rota para criar um novo cliente
router.post('/clients', async (req: Request, res: Response) => {
    try {
        const newClient = await ClientCrud.createClient(req.body);

        res.json(newClient);

        console.log('New client created:', newClient);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router; */


  
/* 
router.get('/clients/:id', async (req: Request, res: Response) => {
  try {
    const clientId = Number(req.params.id);
    const client = await ClientCrud.getClientById(clientId);

    if (!client) {
      res.status(404).json({ error: 'Client not found' });
      return;
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 */

