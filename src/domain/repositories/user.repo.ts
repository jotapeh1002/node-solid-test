import { User } from "../../domain/entities/user.entity";
import { UserDto } from "../../dtos/user.dto";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<UserDto | null>;
}
