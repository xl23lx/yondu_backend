import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {updateUser} from '../src/controller/userController'
import { TokenManager } from "../src/helper/jwt.helper";

const tokenManager=new TokenManager();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const verifyToken=await tokenManager.verifyToken(req.headers['authorization'])
    if(verifyToken){
        context.res={status:401,body:{message:"Unauthorized action!"}};
        return;
    }
    const response=await updateUser(req.body,req.params.id);
    context.res = response;

};

export default httpTrigger;