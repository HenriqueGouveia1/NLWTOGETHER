import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController{
    async handle(response: Response, request: Request ){
        const listUsersController = new ListUsersService();
        
        const users = await listUsersController.execute();

        return classToPlain(users);
    }
}

export {ListUsersController};