import express, { Request, Response, NextFunction } from "express";

import headphoneRoutes from "./routes/headphones";

const app = express();

app.use("/headphones", headphoneRoutes);

// middleware handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("listening on port 3000"));
