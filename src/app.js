import cors from 'cors'
import express from 'express'

import RssRouter from './routes/RssRouter.js'
import EpisodeRouter from './routes/EpisodeRouter.js'

const App = express()

const corsOptions = {
  origin: 'https://talkintricks.com'
}

// middleware
App.use(express.json())
App.disable('x-powered-by')

// routes
App.use('/rss', RssRouter)
// App.use('/', cors(corsOptions), EpisodeRouter)

export default App