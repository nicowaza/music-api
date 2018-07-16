import express from 'express'
import "dotenv/config"
const { SERVER_PORT, DBUrl } = process.env
const app = express()
import bodyparser from 'body-parser'
import volleyball from 'volleyball'
import mongoose from 'mongoose'


const options = {
  promiseLibrary: Promise,
  useNewUrlParser: true
}

mongoose.connect(DBUrl, options);
let db = mongoose.connection;

mongoose.connection.on('connected', () =>
console.log('[MongoDB] is running on port 27017')
)


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
console.log('Connecté a MongoDB !')
});


app.get("/", (req, res) => {
  console.log('ça marche')
})

app.use(volleyball)

app.listen(process.env.PORT || SERVER_PORT, () => console.log(`[Express] is running on ${process.env.PORT || SERVER_PORT}`))
