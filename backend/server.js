import express from "express";
import cors from "cors";
import { connectDB, sql } from "./src/config/db.js";
import chapterRoutes from "./src/routes/chapterRoutes.js";
import novelRoutes from "./src/routes/novelRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import bookmarkRoutes from "./src/routes/bookmarkRoutes.js";
const app = express();
app.use(cors()); // Cho phép Frontend gọi tới
app.use(express.json());
await connectDB();
app.use("/api", novelRoutes);
app.use("/api", chapterRoutes);
app.use("/api", categoryRoutes);
app.use("/api", bookmarkRoutes);
app.listen(8080, () => {
  console.log(`Kết nối tại cổng ${8080}`);
});
