import joi from 'joi'

const authSchema = joi.object({
  name: joi.string().required(),
  cpf: joi.string().regex(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  address: joi.string().required(),
})

export default authSchema
