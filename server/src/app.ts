import express, { Request, Response, NextFunction } from "express";
import routerRoutes from "./routerRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api", routerRoutes);

// middleware handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(4000, () => console.log("listening on port 4000"));
