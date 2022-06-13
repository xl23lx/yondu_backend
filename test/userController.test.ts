jest.useFakeTimers()
import {getAllUsers,deleteUser,addUser, login} from '../src/controller/userController'
import { AppDataSource } from '../src/utilities/database';
import { Repository } from 'typeorm';
import {User} from "../src/entity/User"

const db = AppDataSource;
describe('testing transaction summary controller methods', () => {
    test("should return all users", async() => {
        const getUsers=await getAllUsers();
        expect(getUsers.status).toBe(200);
    });
    test("should delete a user", async() => {
        const userRepo = await db.getRepository(User) as Repository<User>;
        const user=await userRepo.find();
        const getUsers=await deleteUser(user[0]?.id);
        expect(getUsers.status).toBe(200);
    });
    test("should add a user", async() => {
        const req={
            address:"Tanauan Batangas",
            firstName:"Benedict",
            lastName:"Nones",
            mobileNumber:"09128557035",
            password:"password",
            postcode:4232,
            username:"l23l"
        }
        const getUsers=await addUser(req);
        expect(getUsers.status).toBe(200);
    });
    test("should able to login", async() => {
        const getUsers=await login({username:'l23l',password:'password'});
        expect(getUsers.status).toBe(200);
    });
});