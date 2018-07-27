import { ARTISTE_ROLE } from '../ressources/user/user.model'

export const isArtist = (req, res, next) => {
  if(req.user.role !== ARTISTE_ROLE){
    return res.json({ err: 'unauthorized, not an artist'})
  }
  next()
}
