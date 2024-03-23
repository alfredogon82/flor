import { AuthControllerInst } from "../controllers";
import BaseRouter from "./base/BaseRouter";


class AuthRoutes extends BaseRouter{
    routes(): void {
        this.router.post("/", AuthControllerInst.validateRegister);

    }
}

export const AuthRoutesInst = new AuthRoutes().router;