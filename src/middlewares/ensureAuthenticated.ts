import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {


    //receber o token
    const authtoken = request.headers.authorization;

    //Validar se token esta preenchida
    if (!authtoken) {
        return response.status(401).end();
    }

    const [, token] = authtoken.split(" ");
    
    try {
        //Validar se token é válido
        const {sub} = verify(token, "698dc19d489c4e4db73e28a713eab07b") as IPayload;

        request.user_id = sub;

        return next();

    } catch (err) {
        return response.status(401).end();
    }

    //Recuperar infos do user
}