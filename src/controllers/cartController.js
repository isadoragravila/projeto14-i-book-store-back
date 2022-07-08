import { db, objectId } from '../databases/mongo.js';

export async function insertProduct(req, res) {
    try {
        const userId = res.locals.userId;
        const { productId } = req.body;

        await db.collection('carts').updateOne(
            { userId: new objectId(userId) },
            { $push: { products: productId } }
        );

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function insertSale(req, res) {
    try {
        const userId = res.locals.userId;
        const sale = req.body;

        await db.collection('sales').insertOne({ userId, ...sale });

        return res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error);
    }
};

export async function cleanCart(req, res) {
    try {
        const userId = res.locals.userId;

        await db.collection('carts').updateOne(
            { userId },
            { $set: { products: [] }}
        );

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
};