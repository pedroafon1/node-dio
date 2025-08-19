import express, { Request, Response } from "express";
import router from "./routes";

const app = express();

function createApp() {
  app.use(express.json());
  app.use("/", router)
  

  return app;
}

export default createApp();
