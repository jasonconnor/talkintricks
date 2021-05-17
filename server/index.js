import http from 'http'
<<<<<<< HEAD

import app from './src/app.js'
=======
import dotenv from 'dotenv'

import App from './src/App.js'
>>>>>>> d6b5381dd84f5ad2261d583de7f77028e73715cc
import connect from './conf/db.js'

dotenv.config()
const server = http.createServer(App)

server.listen(3000, () => {
  console.log('Server started.')
<<<<<<< HEAD
  connect()
=======
  connect(process.env.MONGO_URL)
>>>>>>> d6b5381dd84f5ad2261d583de7f77028e73715cc
})