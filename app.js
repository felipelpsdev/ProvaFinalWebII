import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';
import disciplinaRoutes from './routes/disciplinaRoutes.js';
import solicitacaoRoutes from './routes/solicitacaoRoutes.js';

const app = express();

app.use(express.json());

// Rotas
app.use('/api', alunoRoutes);
app.use('/api', disciplinaRoutes);
app.use('/api', solicitacaoRoutes);

// Iniciar servidor
const PORT = 3308;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});