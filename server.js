const app = require('./src/config')
const PORT = process.env.PORT || 3001

app.get('/', (req, res) =>
  res.status(200).json({ 
    success: true, 
  })
)

app.listen(PORT, () =>
  console.log(`Server up and running on port: ${PORT}`)
)