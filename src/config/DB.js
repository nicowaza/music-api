import mongoose from 'mongoose'
import 'dotenv/config'
const { DBUrl } = process.env



mongoose.Promise = global.Promise;
export const connect = () => mongoose.connect('mongodb://localhost:27017/music_db')


let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
console.log('Connecté a MongoDB !')
});
