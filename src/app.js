import express from 'express'

import RssRouter from './routes/RssRouter.js'

const App = express()

// middleware
App.use(express.json())
App.disable('x-powered-by')

// routes
App.use('/rss', RssRouter)

export default App