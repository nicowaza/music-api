import express from 'express'
import songController from './song.ctrl'
import passport from 'passport'
import { isArtist } from '../../middleware/artist'

export const songRouter = express.Router() /*exporte tous les songRouter. qui suivent*/
const artistPolicy = [passport.authenticate('jwt', {session: false}), isArtist]
songRouter.route('/') /* le.route permet de créer un bloc de route à laquelle on va pouvoir accoler toutes les methodes (get, post etc*/
  .post(artistPolicy, songController.create)
  .get(passport.authenticate('jwt', {session: false}), songController.findAll)
  songRouter.route("/:id")
  .get(passport.authenticate('jwt', {session: false}), songController.findOne)
  .put(artistPolicy, songController.update)
  .delete(artistPolicy, songController.delete)
