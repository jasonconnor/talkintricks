import http from 'http'
import dotenv from 'dotenv'

import App from './src/App.js'
import connect from './conf/db.js'

dotenv.config()
const server = http.createServer(App)

server.listen(3000, () => {
  console.log('Server started.')
  connect(process.env.MONGO_DEV)
})