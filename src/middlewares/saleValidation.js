import saleSchema from '../schemas/saleSchema.js'

async function saleValidation(req, res, next) {
  const validation = saleSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422)
  };

  next();
}

export default saleValidation;