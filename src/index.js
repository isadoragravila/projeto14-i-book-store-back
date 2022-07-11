import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routers/authRouter.js';
import productRouter from './routers/productRouter.js';
import cartRouter from './routers/cartRouter.js';
import saleRouter from './routers/saleRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(productRouter);
app.use(cartRouter);
app.use(saleRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`));


