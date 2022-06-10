import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {deleteUser} from '../src/controller/userController'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await deleteUser(req.params.id)
    context.res = response;

};

export default httpTrigger;