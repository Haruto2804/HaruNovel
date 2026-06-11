import express from "express";
import { connectDB, sql } from "./src/config/db.js";
import novelRoutes from "./src/routes/novelRoutes.js";
const app = express();
app.use(express.json());
await connectDB();
app.use("/api", novelRoutes);
app.listen(8080, () => {
  console.log(`Kết nối tại cổng ${8080}`);
});
