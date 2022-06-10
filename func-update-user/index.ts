import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {updateUser} from '../src/controller/userController'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await updateUser(req.body,req.params.id);
    context.res = response;

};

export default httpTrigger;