/* A boilerplate for setting up a web app using a node express server, with postgres db */

require('dotenv').config({path: './.env'})

const PORT = process.env.PORT || 8000
const ENV = process.env.ENV || 'development'

const express = require('express')
const bodyParser = require('body-parser')
const sass = require('node-sass-middleware') // If using SASS
const app = express()
const path = require('path')

// For DB, make sure to npm install --save knex
// Setup knexfile.js and .env

// const knexConfig = require('./knexfile')
// const knex = require('knex')(knexConfig[ENV])

const server = require('http').Server(app)

server.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`)})

app.set('view engine', 'ejs')
app.use(sass({
  src: './styles',
  dest: './public/styles',
  indentedSyntax: false,
  force: true,
  debug: true,
  outputStyle: 'expanded'
}))

app.get('/', (req, res) => {
  res.render('index')
})