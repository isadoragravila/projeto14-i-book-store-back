import { db, objectId } from '../databases/mongo.js';
import cartSchema from '../schemas/cartSchema.js'

async function cartValidation(req, res, next) {
  const validation = cartSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422)
  };

  const userId = res.locals.userId;

  const cart = await db.collection('carts').findOne({ userId: new objectId(userId) });

  if (!cart) {
    return res.status(404).send("Algo deu errado, refaça seu login!");
  }

  next();
}

export default cartValidation;