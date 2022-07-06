import authSchema from '../schemas/authSchema.js'

async function authValidation(req, res, next) {
  const validation = authSchema.validate(req.body)

  if (validation.error) {
    return res.sendStatus(422)
  }

  next()
}

export default authValidation
