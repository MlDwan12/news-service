import { AppDataSource } from "./config/database.config";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 31000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });
