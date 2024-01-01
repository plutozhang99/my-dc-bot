import express from 'express';
import { interactionsHandler } from './interactionsHandler';

const app = express();
app.use(express.json());

app.post('/interactions', interactionsHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
