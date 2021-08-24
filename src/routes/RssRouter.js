import cors from 'cors'
import express from 'express'

import * as RssController from '../controllers/RssController.js'

const RssRouter = express.Router()

const corsOptions = {
  origin: '*',
  methods: 'GET',
  optionsSuccessStatus: 200,
}

RssRouter.get('/', cors(corsOptions), RssController.getFeed)

export default RssRouter