import express from 'express'
import { songRouter } from './ressources/song'
import { userRouter } from './ressources/user'
import { playlistRouter } from './ressources/playlist'

export const restRouter = express.Router()

restRouter.use('/songs', songRouter)
restRouter.use('/users', userRouter)
restRouter.use('/playlists', playlistRouter)
