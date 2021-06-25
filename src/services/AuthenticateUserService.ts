import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticaticateUserService{
    async execute({email,password}: IAuthenticateRequest){
        const userRepositories = getCustomRepository(UsersRepositories);

        //Verificar se o email existe 
        const user = await userRepositories.findOne({email});
        if(!user){  
            throw new Error("Email/Password incorrect");
            
        }

        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email 
        }, "698dc19d489c4e4db73e28a713eab07b", {
            subject: user.id,
            expiresIn: "1d"
        } 
        )
        return token;
    }
}export{AuthenticaticateUserService}