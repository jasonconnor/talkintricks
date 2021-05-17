import express from 'express'

import EpisodeRouter from './routes/EpisodeRouter.js'

const app = express()

app.use('/api', EpisodeRouter)

export default app