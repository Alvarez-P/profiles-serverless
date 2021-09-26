const app = require('./app')
const { Configuration, Constants } = require('./config')
const PORT = Configuration.get(Constants.APP_PORT) || 8080

app.listen(
  PORT,
  () => console.log(`Server running on port ${PORT}`)
)
