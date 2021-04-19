import express = require('express')

const app = express()

app.get("/", (request: express.Request, response: express.Response) => {
  return response.json({
    message: "Olá mundo",
  })
})

app.post("/", (request: express.Request, response: express.Response) => {
  return response.json({
    message: "Usuario salvo com sucesso"
  })
})

app.listen(3000, () => console.log('Yare yare daze'))