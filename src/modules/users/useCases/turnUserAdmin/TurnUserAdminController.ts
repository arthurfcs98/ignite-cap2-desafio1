import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const userId = request.params.user_id

      const user = this.turnUserAdminUseCase.execute({ user_id: userId })

      return response.status(203).json(user)

    } catch (error) {
      return response.status(404).json({ error: error.message })
    }


  }
}

export { TurnUserAdminController };
