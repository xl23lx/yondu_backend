import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { deleteMultipleUser } from "../src/controller/userController";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await deleteMultipleUser(req.body)
    context.res = response;

};

export default httpTrigger;