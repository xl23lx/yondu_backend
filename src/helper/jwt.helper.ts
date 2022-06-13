import jwt from 'jsonwebtoken'
import config from '../config'
import crypto from 'crypto'

export class TokenManager{

    generateToken = (payload:any) =>{
        return jwt.sign(payload, config.TOKEN_SECRET)
    }

    async verifyToken(authorization){
        const token = authorization && authorization.split(' ')[1]
        if (token == null){
            return new Error("Missing Token");
        } 
        try{
            const payload = jwt.verify(token, config.TOKEN_SECRET as string);
            if (!payload) {
                return new Error('Invalid token');
            } 
            //return payload;
        } catch(error) {
            return error;
        }
    }

    async ecodeToken(token:string) {
        const bearerToken = token && token.split(' ')[1]
        return jwt.verify(bearerToken, config.TOKEN_SECRET as string) as any;
    }
}