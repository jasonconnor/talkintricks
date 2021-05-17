import express from 'express'

import StreamController from '../controllers/StreamController.js'

const StreamRouter = express.Router()

StreamRouter.get('/', StreamController.index)

export default StreamRouter