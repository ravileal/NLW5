import { Router } from "express"
import { MessageController } from "./controllers/MessageController"
import { SettingsController } from "./controllers/SettingsController"
import { UserController } from "./controllers/UserController"

const routes = Router()

const settingsController = new SettingsController()
const userController = new UserController()
const messageController = new MessageController()

routes.post("/settings", settingsController.create)

routes.post("/users", userController.create)

routes.post("/messages", messageController.create)
routes.get("/messages/:id", messageController.showByUser)

export {routes}