import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { addUser } from "../src/controller/userController";
import { TokenManager } from "../src/helper/jwt.helper";

const tokenManager=new TokenManager();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const verifyToken=await tokenManager.verifyToken(req.headers['authorization'])
    if(verifyToken){
        context.res={status:401,body:{message:"Unauthorized action!"}};
        return;
    }
    const response=await addUser(req.body);
    context.res = response;
};

export default httpTrigger;