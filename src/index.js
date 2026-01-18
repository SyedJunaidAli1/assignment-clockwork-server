import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
