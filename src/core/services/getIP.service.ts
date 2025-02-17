import { Request } from "express";

export function getUserIp(req: Request): string {
  return (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "IP not identified";
}


//implemente isso depois para evitar o token de ser acessado em outro pc de uma mesma rede