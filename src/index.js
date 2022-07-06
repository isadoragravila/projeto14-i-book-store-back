import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import authRouter from './routers/authRouter.js';

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(productRouter);
app.use(authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`));

