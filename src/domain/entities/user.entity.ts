import { randomUUID } from "crypto";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;

  constructor(User: IUser, id?: string) {
    this.id = id ?? randomUUID();
    this.name = User.name;
    this.email = User.email;
    this.password = User.password
  }
}
