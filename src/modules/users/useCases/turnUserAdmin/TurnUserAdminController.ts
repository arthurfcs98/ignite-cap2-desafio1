import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const userId = request.params.user_id

    this.turnUserAdminUseCase.execute({ user_id: userId })

    return response.status(200).send()

  }
}

export { TurnUserAdminController };
