import express = require('express')
import "./database"
import {routes} from "./routes"

const app = express()

app.use(express.json())
app.use(routes)

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