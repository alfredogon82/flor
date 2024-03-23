import ServerInit from "./server";
import dotenv from "dotenv";
dotenv.config();
const server = new ServerInit();
server.start();