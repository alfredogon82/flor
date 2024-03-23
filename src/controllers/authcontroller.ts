import { Request, Response } from "express";

class AuthController {
    async validateRegister(req: Request, res:Response): Promise<Response> {
        try {
            console.log("maldito!");       
            const respuesta = {"key":"value"};
            return res.json(respuesta);    
        } catch (error) {
            return res.status(500);
        }
        
    }
}

export const AuthControllerInst = new AuthController();