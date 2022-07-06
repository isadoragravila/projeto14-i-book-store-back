import { db, objectId } from '../databases/mongo.js';

export async function getProducts(req, res) {
    try {
        const products = await db.collection('products').find().toArray();

        return res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getSingleProuct(req, res) {
    try {
        const id = req.params.idProduct;
        const product = await db.collection('products').findOne({ _id: new objectId(id) });

        if (!product) {
            return res.status(404).send("Produto não encontrado");
        }

        return res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
}