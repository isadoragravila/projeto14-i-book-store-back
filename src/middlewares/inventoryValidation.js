import inventorySchema from '../schemas/inventorySchema.js';

async function inventoryValidation(req, res, next) {
  const validation = inventorySchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export default inventoryValidation;