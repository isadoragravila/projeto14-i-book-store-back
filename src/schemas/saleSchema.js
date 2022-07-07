import joi from 'joi';

const saleSchema = joi.object({
  payment: joi.string().valid("boleto", "credito", "debito").required(),
  value: joi.number().greater(0).required(),
  products: joi.array().items(joi.string()).required()
});

export default saleSchema;