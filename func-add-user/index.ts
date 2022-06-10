import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { addUser } from "../src/controller/userController";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response=await addUser(req.body);
    context.res = response;
};

export default httpTrigger;