import express from "express";
import cors from "cors";
import { publicRoutes } from "../../../infra/http/routes/publicRoutes";
export const app = express();

app.use(express.json());

app.use(publicRoutes)

// app.use(privateRoutes)

app.use(
  cors({
    origin: "*",
  })
);