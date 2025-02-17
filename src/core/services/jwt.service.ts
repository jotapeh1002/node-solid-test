import { User } from "../../domain/entities/user.entity";
import jwt from "jsonwebtoken";
import "dotenv/config";

export class JwtService {
  private readonly SECRET_KEY: string;

  constructor() {
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    this.SECRET_KEY = process.env.JWT_SECRET;
  }

  tokenGenerate(props: User): string {
    const token = jwt.sign(
      {
        id: props.id,
        name: props.name,
        email: props.email,
      }, this.SECRET_KEY,
      { expiresIn: "1d" }
    );
    return token;
  }

  validateToken(token: string) {
    const tokenValidate = jwt.verify(token, this.SECRET_KEY);
    return tokenValidate;
  }
}
