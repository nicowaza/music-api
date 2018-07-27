import mongoose from 'mongoose'
import 'dotenv/config'
const { DBUrl } = process.env
import { getConfig } from './config'

const config = getConfig(process.env.NODE_ENV)
mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect((config.MONGO_URI), { useNewUrlParser: true})

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
console.log('Connecté a MongoDB !')
});
