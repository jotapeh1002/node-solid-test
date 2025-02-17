import { UserCases } from "../../../../domain/useCases/user";
import { Request, Response } from "express";

export class createController {
  private userCases: UserCases;

  constructor() {
    this.userCases = new UserCases();
  }

  create = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const user = await this.userCases.create({ name, email, password });

      res.status(201).json({ message: "User created successfully", user });
    } catch (error: any) {
      console.error(`${error.message}\n${error.stack}`);

      res
        .status(400)
        .json({
          error: error instanceof Error ? error.message : "Unknown error",
        });
    }
  };
}
