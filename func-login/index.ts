import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {login} from '../src/controller/userController';
import {User} from '../src/entity/User';
import { AppDataSource } from "../src/utilities/database";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await login(req.body);
    context.res = response;

};

export default httpTrigger;