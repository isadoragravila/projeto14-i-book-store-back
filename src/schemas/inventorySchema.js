import joi from 'joi';

const inventorySchema = joi.array().items(
    joi.object({
      productId: joi.string().required(),
      price: joi.number().greater(0).required(),
      quantity: joi.number().greater(0).required()
    })
  );

export default inventorySchema;