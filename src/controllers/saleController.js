import { db, objectId } from '../databases/mongo.js';

export async function insertSale(req, res) {
    try {
        const userId = res.locals.userId;
        const sale = req.body;

        await db.collection('sales').insertOne({ userId, ...sale });

        return res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function cleanCart(req, res) {
    try {
        const userId = res.locals.userId;

        await db.collection('carts').updateOne(
            { userId: new objectId(userId) },
            { $set: { products: [] } }
        );

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function changeInventory(req, res) {
    try {
        const products = req.body;

        for (let i = 0; i < products.length; i++) {
            await db.collection('products').updateOne(
                { _id: new objectId(products[i].productId) },
                { $inc: { quantity: -products[i].quantity } }
            );
        };

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
}