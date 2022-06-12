jest.useFakeTimers()
import {getAllUsers} from '../src/controller/userController'
describe('testing transaction summary controller methods', () => {
    test("should return all users", async() => {
        const getUsers=await getAllUsers();
        expect(getUsers.status).toBe(200);
    });
});