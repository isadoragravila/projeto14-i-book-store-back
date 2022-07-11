import { db } from '../databases/mongo.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

export async function signUp(req, res) {
  const user = req.body

  const verifyEmail = await db.collection('users').findOne({ email: user.email });
  if (verifyEmail) {
    return res.status(409).send("E-mail já em uso. Utilize outro e-mail");
  }

  const hashPassword = bcrypt.hashSync(user.password, 10)

  try {
    await db.collection('users').insertOne({ ...user, password: hashPassword })
    const userDB = await db.collection('users').findOne({ email: user.email })

    if (userDB) {
      await db.collection('carts').insertOne({ userId: userDB._id, products: [] })
    }

    res.status(201).send('Usuário cadastrado com sucesso!!')
  } catch (error) {
    res.status(500).send('Ocorreu um erro :(, tente novamente!!')
  }
}

export async function signIn(req, res) {
  const user = req.body
  try {
    const userDB = await db.collection('users').findOne({ email: user.email })

    if (userDB && bcrypt.compareSync(user.password, userDB.password)) {
      const token = uuid()

      await db.collection('sessions').insertOne({
        token,
        userId: userDB._id,
      })

      return res.status(200).send({ token })
    }
    return res.status(401).send('Senha ou e-mail incorretos!!')
  } catch (error) {
    res.status(500).send('Ocorreu um erro :(, tente novamente!!')
  }
}
