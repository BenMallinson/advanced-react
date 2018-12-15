require('dotenv').config({path: 'variables.env'})
const createServer = require('./createServer')
const db = require('./db')

const server =  createServer()

// use middleware for cookies and user population

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, details => {
  console.log(details.port)
})
