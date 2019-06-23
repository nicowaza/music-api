const config = {
  production : {
    secret : process.env.secret,
    MONGO_URI : process.env.MONGO_URI,
    port : process.env.PORT
  },
  development : {
    secret : '%Simplon_blabla',
    MONGO_URI : 'mongodb://localhost:27017/music_db',
    port : 6789,
  }
}

export const getConfig = env => config[env] || config.development
