import joi from 'joi';

const cartSchema = joi.object({
  userId: joi.string().required(),
  productId: joi.string().required()
});

export default cartSchema;