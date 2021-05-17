import http from 'http'

import app from './src/app.js'
import connect from './conf/db.js'

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Server started.')
  connect()
})