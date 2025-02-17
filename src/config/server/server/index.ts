import { app } from "../app";
import { config } from "dotenv";

config();

const _PORT = 3333;

app.listen(_PORT, () => {
  console.log(`Server is running on http://localhost:${_PORT}`);
});
