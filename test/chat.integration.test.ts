import ChatClient from "../src/client/ChatClient";
import UserService from "../src/service/UserService";
import { UserRegisterRequest, UserLoginRequest } from "../src/model/request/userApiRequest";
import { CreateConversation, InitMessageRequest, ConversationRequest, User } from "../src/model/request/chatClientRequest";
import { UserRegisterResponse, UserLoginResponse } from "../src/model/response/userApiResponse";

import NodeCache from "node-cache";
import { CreateConversationResponse } from "../src/model/response/chatClientResponse";

const userDataCache = new NodeCache();

describe("Chat Client Integration Tests", () => {
    let userService: UserService;
    let clientOne: ChatClient;
    let clientTwo: ChatClient;

    beforeAll(async () => {
        userService = new UserService();

        const userOneLoginRequest: UserLoginRequest = {
            username: "userOne",
            password: "Password98!"
        };

        const userTwoLoginRequest: UserLoginRequest = {
            username: "userTwo",
            password: "Password98!"
        };

        // const userOneRegisterRequest: UserRegisterRequest = {
        //     username: "userOne",
        //     password: "Password98!",
        //     name: "User One"
        // };

        // const userTwoRegisterRequest: UserRegisterRequest = {
        //     username: "userTwo",
        //     password: "Password98!",
        //     name: "User Two"
        // };
        
        // const userOneRegisterResponse: UserRegisterResponse = await userService.register(userOneRegisterRequest);
        // userDataCache.set("userOne", userOneRegisterResponse);

        // const userTwoRegisterResponse: UserRegisterResponse = await userService.register(userTwoRegisterRequest);
        // userDataCache.set("userTwo", userTwoRegisterResponse);

        const userOneLoginResponse: UserLoginResponse = await userService.login(userOneLoginRequest);
        userDataCache.set("userOneLogin", userOneLoginResponse);

        const userTwoLoginResponse: UserLoginResponse = await userService.login(userTwoLoginRequest);
        userDataCache.set("userTwoLogin", userTwoLoginResponse);
    });

    // afterAll(() => {
    //     clientOne.disconnect();
    //     clientTwo.disconnect();
    // });

    it("User One should create a conversation and send initial message to User two", async () => {
        let message: string = "Hello User Two";

        clientOne = new ChatClient();
        clientTwo = new ChatClient();

        const userOneLoginResponse: UserLoginResponse | undefined = userDataCache.get("userOneLogin");
        if (!userOneLoginResponse) {
            console.error("User One not found in cache");
            return;
        }

        const userTwoLoginResponse: UserLoginResponse | undefined = userDataCache.get("userTwoLogin");
        console.log("userTwoLoginResponse: ", userTwoLoginResponse);
        if (!userTwoLoginResponse) {
            console.error("User Two not found in cache");
            return;
        }

        clientOne.createSocketConnection(userOneLoginResponse.userId);
        clientTwo.createSocketConnection(userTwoLoginResponse.userId);

        await Promise.all([clientOne.waitForConnection(), clientTwo.waitForConnection()]);

        const user: User = {
            id: userTwoLoginResponse.userId,
            name: userTwoLoginResponse.name,
        }

        const init_message_request: InitMessageRequest = {
            sender_id: userOneLoginResponse.userId,
            text: message,
            created_at: new Date(),
        };
      
        const conversation_request: ConversationRequest = {
            name: userTwoLoginResponse.name,
            owner_id: userOneLoginResponse.userId,
            members: user ? [user] : [],
            created_at: new Date(),
        };
      
        const createConversationRequest: CreateConversation = {
            conversation_request,
            init_message_request,
        };

        clientOne.createConversation(createConversationRequest);

        const clientTwoCreateConversationResponse: CreateConversationResponse = await clientTwo.handleCreateConversation();
        console.log("Message Response: ", clientTwoCreateConversationResponse.message_response.text);

        clientOne.disconnect();
        clientTwo.disconnect();
        expect(clientTwoCreateConversationResponse.message_response.text).toEqual(message);

    });
});