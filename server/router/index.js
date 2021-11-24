const express  = require('express')
const router   = express.Router()
const Document = require('./routes/Document')

router
   .get('/', Document.get_all)