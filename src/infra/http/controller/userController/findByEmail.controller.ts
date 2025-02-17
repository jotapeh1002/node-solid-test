import { UserCases } from "../../../../domain/useCases/user";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class findByEmailController {
  private userCases: UserCases;

  constructor() {
    this.userCases = new UserCases();
    this.findByEmail = this.findByEmail.bind(this);
  }

  async findByEmail(req: Request, res: Response) : Promise<void> {
    try{
      const { email } = req.body;

      const user = await this.userCases.findByEmail(email);

      if (!user) {
        console.log("User not found");
         res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
      }

       res.status(200).json({ message: user });

    } catch (error: any) {

      console.error(`${error.message}\n${error.stack}`);

      res.status(400).json({
        error: error instanceof Error,
      });
    }
  }
}
