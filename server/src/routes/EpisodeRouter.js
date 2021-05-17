import express from 'express'

import EpisodeController from '../controllers/EpisodeController.js'

const EpisodeRouter = express.Router()

EpisodeRouter.get('/', EpisodeController.index)

export default EpisodeRouter