import loginSchema from '../schemas/loginSchema.js'

async function loginValidation(req, res, next) {
  const validation = loginSchema.validate(req.body)

  if (validation.error) {
    return res.sendStatus(422)
  }

  next()
}

export default loginValidation