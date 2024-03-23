
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { AuthRoutesInst } from "./routes";

class ServerInit{

    public app: Application;
    port: string;
    host: string;

    constructor() {
        dotenv;
        this.app = express(); 
        this.port = process.env.PORT || "3000";
        this.host = process.env.HOST || 'localhost';
        this.middleware();
        this.routes();
    }

    start(): void {
        this.app.listen(this.app.get("port"), this.app.get('host'), () => {
            console.log(`server up!!! Host: ${this.app.get('host')} Port: ${this.app.get("port")}`);
        });
    }

    middleware(): void {
        this.app.set("port", this.port);
        this.app.set("host", this.host);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(morgan('dev'));
    }

    routes(): void {
        this.app.route("/").get((req: Request, res: Response) => { 
            //console.log(req);
            //res.send("sucio");
            res.json({"key":"value"});
            //res.status(200).json({"key":"value"});
        });

        
        this.app.use("/auth", AuthRoutesInst); // use post / get 
        /*
        this.app.use("/users",            pathRoutes.UserRoutes);
        this.app.use("/buildings",        pathRoutes.BuildingRoutes);
        this.app.use("/lists",            pathRoutes.ListRoutes);
        this.app.use("/floors",           pathRoutes.FloorRoutes);
        */
    }
}

export default ServerInit;