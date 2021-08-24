import express from 'express'

import * as EpisodeController from '../controllers/EpisodeController.js'

const EpisodeRouter = express.Router()

EpisodeRouter.get('/episodes', EpisodeController.index)

export default EpisodeRouter