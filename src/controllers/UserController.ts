import { Response, Request } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { UserService } from "../services/UserService";

class UserController {
  
  async create(request: Request, response: Response) {
    const {email} = request.body;

    const userService = new UserService();

    try {
      const settings = await userService.create(email);
      return response.json(settings)
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      })
    }

  }

}

export { UserController }