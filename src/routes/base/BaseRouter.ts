import { Router } from "express";
import { IRouter } from "../../../interfaces/IRouter";

abstract class BaseRouter implements IRouter{
    abstract routes(): void; 
    router: Router;

    constructor(){
        this.router = Router();
        this.routes;
    }
}

export default BaseRouter;