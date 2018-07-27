import express from 'express'
import "dotenv/config"
const {
  SERVER_PORT
} = process.env
const app = express()
import bodyparser from 'body-parser'
import volleyball from 'volleyball'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './config/swagger.json'
import mongoose from 'mongoose'
import {
  connect
} from './config/DB'
import {
  restRouter
} from './api'
import passport from 'passport'
import {
  configJWTStrategy
} from './api/middleware/passport-jwt'


connect() /* on utilise la méthode connect que l'on a déclaré dans le fichier config de DB  */

// mongoose.connection.on('connected', () =>
// console.log('[MongoDB] is running on port 27017')
// )
app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(passport.initialize()) //req.user
configJWTStrategy()
app.use('/api', restRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, {
  explorer: true
}))
app.get("/", (req, res) => {
  console.log('ça marche')
  res.json({
    msg: "tout est ok"
  })
})

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.message = 'route invalide'
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.json({
    error: {
      msg: error.message
    }
  })
})



app.listen(process.env.PORT || SERVER_PORT, () => console.log(`[Express] is running on ${process.env.PORT || SERVER_PORT}`))