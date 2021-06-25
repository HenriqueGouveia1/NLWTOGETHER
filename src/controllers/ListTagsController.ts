import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController{
    async handle(response: Response, request: Request ){
        const listTagsController = new ListTagsService();
        
        const tags = await listTagsController.execute();

        return classToPlain(tags)
    }
}

export {ListTagsController};