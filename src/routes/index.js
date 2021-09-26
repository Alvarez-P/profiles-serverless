const express = require('express')
const router = express.Router()

router.use('/profiles', require('./profiles'))
router.use('/employees', require('./employees'))
router.get('/', (req, res) => {
  res.send({ message: 'Home' })
})

module.exports = router
