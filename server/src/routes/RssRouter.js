import express from 'express'

import RssController from '../controllers/RssController.js'

const RssRouter = express.Router()

RssRouter.get('/', RssController.getFeed)
RssRouter.get('/json', RssController.getJsonFeed)

export default RssRouter