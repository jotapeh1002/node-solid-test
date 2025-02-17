import { PrismaClient } from "@prisma/client";
import { User } from "../../../domain/entities/user.entity";
import { IUserRepository } from "../../../domain/repositories/user.repo";
import { UserDto } from "../../../dtos/user.dto";

export class UserRepository implements IUserRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    return await this.prisma.user.create({ data: user });
  }

  async findByEmail(email: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    const userDto: UserDto = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return userDto;
  }
}
