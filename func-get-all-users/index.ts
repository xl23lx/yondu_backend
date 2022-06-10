import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {getAllUsers} from '../src/controller/userController'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await getAllUsers();
    context.res = response;

};

export default httpTrigger;