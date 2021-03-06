import { Request, Response } from "express";
import { AuthenticaticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const{email, password} = request.body

        const authenticateUserService = new AuthenticaticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token)
    }
}export {AuthenticateUserController}