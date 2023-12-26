// index.ts
import express from 'express';
import routes from './routes/route';

const app = express();
const port = 5500;

// Utiliza as rotas definidas no arquivo route.ts
app.use('/api', routes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
