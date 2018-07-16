import express from 'express'
import "dotenv/config"
const { SERVER_PORT } = process.env
const app = express()
import bodyparser from 'body-parser'
import volleyball from 'volleyball'
import mongoose from 'mongoose'
import { connect } from './config/DB'


connect() /* on utilise la méthode connect que l'on a déclaré dans le fichier config de DB  */

// mongoose.connection.on('connected', () =>
// console.log('[MongoDB] is running on port 27017')
// )




app.get("/", (req, res) => {
  console.log('ça marche')
  res.json({msg: "tout est ok"})
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
    error:{
      msg: error.message
    }
  })
})

app.use(volleyball)

app.listen(process.env.PORT || SERVER_PORT, () => console.log(`[Express] is running on ${process.env.PORT || SERVER_PORT}`))
