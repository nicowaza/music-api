import express from 'express'
import playlistController from './playlist.ctrl'
import passport from 'passport'

export const playlistRouter = express.Router()
playlistRouter.route('/')
  .post(passport.authenticate('jwt', { session: false}), playlistController.create)
