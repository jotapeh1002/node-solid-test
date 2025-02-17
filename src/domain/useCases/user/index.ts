import { HashBcrypt } from "../../../core/services/hash.service";
import { User } from "../../../domain/entities/user.entity";
import { IUserRepository } from "../../../domain/repositories/user.repo";
import { UserDto } from "../../../dtos/user.dto";
import { UserRepository } from "../../../infra/database/repositories/user.repositories";

export class UserCases {
  private userRepository: IUserRepository;
  private hashBcrypt: HashBcrypt;

  constructor() {
    this.userRepository = new UserRepository();
    this.hashBcrypt = new HashBcrypt();
  }

  async create(user: User): Promise<User> {
    try {
      if (!user.name || !user.email || !user.password) {
        throw new Error("name, email and password are required");
      }

      const emailExists = await this.findByEmail(user.email);

      if (emailExists !== null) {
        throw new Error("Email already exists");
      }

      const hashedPassword = await this.hashBcrypt.hashPassword(user.password);

      return await this.userRepository.create({
        name: user.name,
        email: user.email,
        password: hashedPassword,
      });

    } catch (error: any) {

      console.error("Error during user creation:", error.message);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Unknown error during user creation"
      );
    }
  }
  async findByEmail(email: string): Promise<UserDto | null> {
    try {

      if (!email) throw new Error("email is required!!");
      return await this.userRepository.findByEmail(email);

    } catch (error: any) {

      console.error("Error during user creation:", error.message);

      throw new Error(
        error instanceof Error
          ? error.message
          : "Unknown error during user creation"
      );
      
    }
  }
}
