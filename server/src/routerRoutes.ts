import express from "express";
import headphonesRouter from "./routes/headphones";
import speakersRouter from "./routes/speakers";
import earphonesRouter from "./routes/earphones";

const routerRoutes = express();

routerRoutes.use("/headphones", headphonesRouter);
routerRoutes.use("/speakers", speakersRouter);
routerRoutes.use("/earphones", earphonesRouter);

export default routerRoutes;
