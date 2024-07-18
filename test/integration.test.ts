import UserService from "../src/service/UserService";
import ChatClient from "../src/client/ChatClient";
import { Socket } from "socket.io-client";
import { UserRegisterRequest, UserLoginRequest } from "../src/model/request/userApiRequest";


const userService = new UserService();

describe("User Service Integration Tests", () => {

    it("should register a new user", async () => {
        const userRegisterRequest: UserRegisterRequest = {
            username: "testuser",
            password: "Password98!",
            name: "Test User"
        };
        
        const userRegisterResponse = await userService.register(userRegisterRequest);

        expect(userRegisterResponse.username).toEqual(userRegisterRequest.username);
        expect(userRegisterResponse.token).toBeDefined();
        expect(userRegisterResponse.userId).toBeDefined();
    });

    it("should login a user", async () => {
        const userLoginRequest: UserLoginRequest = {
            username: "testuser",
            password: "Password98!"
        };

        const userLoginResponse = await userService.login(userLoginRequest);

        expect(userLoginResponse.username).toEqual(userLoginRequest.username);
        expect(userLoginResponse.token).toBeDefined();
        expect(userLoginResponse.userId).toBeDefined();
    });
});