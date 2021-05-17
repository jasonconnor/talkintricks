import express from 'express'

import RssController from '../controllers/RssController.js'

const RssRouter = express.Router()

RssRouter.get('/', RssController.getFeed)

export default RssRouter