import express from 'express'

import RssRouter from './routes/RssRouter.js'
import EpisodeRouter from './routes/EpisodeRouter.js'

const App = express()

App.use(express.json())

App.use('/api', EpisodeRouter)
App.use('/rss', RssRouter)

export default App