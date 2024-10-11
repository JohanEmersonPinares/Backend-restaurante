import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import foodRouter from "./routes/foodRoute"; 

const app: Application = express();
const port: number = 4100;

app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

app.get("/", (req: Request, res: Response) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server inicializado en http://localhost:${port}`);
});
