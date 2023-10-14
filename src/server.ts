import { log } from "console";
import { app } from "./app";

const PORT = process.env.APPLICATION_PORT || "3001";

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
  log(`Created by Lucas Camargo @2023 ㋡`);
});
