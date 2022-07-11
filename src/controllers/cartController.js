import { db, objectId } from '../databases/mongo.js';

export async function insertProduct(req, res) {
  try {
    const userId = res.locals.userId;
    const { productId } = req.body;
    const cart = res.locals.cart;

    const product = await db.collection('products').findOne({ _id: new objectId(productId) });

    if (cart.products.find((item) => item.productId === productId)) {
      await db.collection('carts').updateOne(
        { userId: new objectId(userId) },
        { $inc: { 'products.$[element].quantity': 1 } },
        { arrayFilters: [{ 'element.productId': productId }] },
      );
      return res.sendStatus(200);
    }

    await db.collection('carts').updateOne(
      { userId: new objectId(userId) },
      { $push: { products: { productId, price: product.price, quantity: 1 } } }
    );

    return res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getCart(req, res) {
  try {
    const userId = res.locals.userId;
    const cart = await db.collection('carts').findOne({ userId: new objectId(userId) });

    return res.status(200).send(cart.products);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteProductFromCart(req, res) {
  try {
    const userId = res.locals.userId;
    const { productId } = req.body;

    await db.collection('carts').updateOne(
      { userId: new objectId(userId) },
      { $pull: { products: { productId } } },
    );

    return res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteProduct(req, res) {
  try {
    const userId = res.locals.userId;
    const { productId } = req.body;

    await db.collection('carts').updateOne(
      { userId: new objectId(userId) },
      { $inc: { 'products.$[element].quantity': -1 } },
      { arrayFilters: [{ 'element.productId': productId }] },
    );

    const cart = await db.collection('carts').findOne({ userId: new objectId(userId) });

    if (cart.products.find((item) => item.productId === productId && item.quantity === 0)) {
      await db.collection('carts').updateOne(
        { userId: new objectId(userId) },
        { $pull: { products: { productId } } },
      );
    }
    return res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}
