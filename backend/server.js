import express from "express";
import { connectDB, sql } from "./src/config/db.js";
import chapterRoutes from "./src/routes/chapterRoutes.js";
import novelRoutes from "./src/routes/novelRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
const app = express();
app.use(express.json());
await connectDB();
app.use("/api", novelRoutes);
app.use("/api", chapterRoutes);
app.use("/api", categoryRoutes);

app.listen(8080, () => {
  console.log(`Kết nối tại cổng ${8080}`);
});
