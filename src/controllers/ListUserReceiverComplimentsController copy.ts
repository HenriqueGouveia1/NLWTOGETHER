import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiverComplimentsController{
    async handle(response: Response, request: Request ){
        const {user_id} = request;

        const listUserReceiverComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiverComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export {ListUserReceiverComplimentsController};