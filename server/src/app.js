import express from 'express'

import EpisodeRouter from './routes/EpisodeRouter.js'

const App = express()

App.use(express.json())

App.use('/api', EpisodeRouter)

export default App