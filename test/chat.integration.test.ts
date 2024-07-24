import ChatClient from "../src/client/ChatClient";
import UserService from "../src/service/UserService";
import ChatService from "../src/service/ChatService";
import { UserRegisterRequest, UserLoginRequest } from "../src/model/request/userApiRequest";
import { CreateConversation, InitMessageRequest, ConversationRequest, User, MessageRequest } from "../src/model/request/chatClientRequest";
import { UserRegisterResponse, UserLoginResponse } from "../src/model/response/userApiResponse";
import { ConversationListResponse, ConversationResponse, MessageListResponse } from "../src/model/response/chatApiResponse";

import NodeCache from "node-cache";
import { CreateConversationResponse, MessageResponse } from "../src/model/response/chatClientResponse";

const userDataCache = new NodeCache();

describe("Chat Client Integration Tests", () => {
    let userService: UserService;
    let clientOne: ChatClient;
    let clientTwo: ChatClient;
    let chatService: ChatService;

    beforeAll(async () => {
        userService = new UserService();
        chatService = new ChatService("http://localhost:3002/chat/api");

        const userOneLoginRequest: UserLoginRequest = {
            username: "userOne",
            password: "Password98!"
        };

        const userTwoLoginRequest: UserLoginRequest = {
            username: "userTwo",
            password: "Password98!"
        };

        const userOneLoginResponse: UserLoginResponse = await userService.login(userOneLoginRequest);
        userDataCache.set("userOneLogin", userOneLoginResponse);

        const userTwoLoginResponse: UserLoginResponse = await userService.login(userTwoLoginRequest);
        userDataCache.set("userTwoLogin", userTwoLoginResponse);
    });

    it("Client One should create a conversation and send initial message to Client Two", async () => {
        let message: string = "Hello User Two";

        clientOne = new ChatClient();
        clientTwo = new ChatClient();

        const userOneLoginResponse: UserLoginResponse | undefined = userDataCache.get("userOneLogin");
        if (!userOneLoginResponse) {
            console.error("User One not found in cache");
            return;
        }

        const userTwoLoginResponse: UserLoginResponse | undefined = userDataCache.get("userTwoLogin");
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

        clientOne.disconnect();
        clientTwo.disconnect();
        expect(clientTwoCreateConversationResponse.message_response.text).toEqual(message);

    });

    it("Fetch all conversations for Client One", async () => {
        const userOneLoginResponse: UserLoginResponse | undefined = userDataCache.get("userOneLogin");
        if (!userOneLoginResponse) {
            console.error("User One not found in cache");
            return;
        }

        let conversationListResponse: ConversationListResponse = await chatService.fetchAllConversations(userOneLoginResponse.userId);
        let conversations = conversationListResponse.conversations;
        
        console.log("Client One Conversation: ", conversations[0].name);

        expect(conversations.length).toBeGreaterThan(0);
        expect(conversations[0].owner_id).toEqual(userOneLoginResponse.userId);
    });

    it("Fetch all conversations for Client Two", async () => {
        const userTwoLoginResponse: UserLoginResponse | undefined = userDataCache.get("userTwoLogin");
        if (!userTwoLoginResponse) {
            console.error("User Two not found in cache");
            return;
        }

        let conversationListResponse: ConversationListResponse = await chatService.fetchAllConversations(userTwoLoginResponse.userId);
        let conversations = conversationListResponse.conversations;
        console.log("Client Two Conversation: ", conversations[0].name);
        userDataCache.set("Conversation", conversations[0]);

        expect(conversations.length).toBeGreaterThan(0);
        expect(conversations[0].members[0]).toEqual(userTwoLoginResponse.userId);
    });

    it("Send messages between Client One and Client Two", async () => {
        clientOne = new ChatClient();
        clientTwo = new ChatClient();

        const conversation: ConversationResponse | undefined = userDataCache.get("Conversation");
        if (!conversation) {
            console.error("Conversation not found in cache");
            return;
        }

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

         // Join clients in conversation.
         clientOne.handleJoinConversation(conversation.id);
         clientTwo.handleJoinConversation(conversation.id);

        const newMessage: MessageRequest = {
            sender_id: userTwoLoginResponse.userId,
            conversation_id: conversation.id,
            text: "Hello User One!",
            created_at: new Date(),
        };

        clientTwo.sendMessage(newMessage);

        const messageResponse: MessageResponse = await clientOne.handleMessage();

        clientOne.disconnect();
        clientTwo.disconnect();
        expect(messageResponse.sender_id).toEqual(newMessage.sender_id);
        expect(messageResponse.text).toEqual(newMessage.text);
        expect(messageResponse.conversation_id).toEqual(newMessage.conversation_id);
    });

    it("Fetch all messages for Client One", async () => {
        const conversation: ConversationResponse | undefined = userDataCache.get("Conversation");
        if (!conversation) {
            console.error("Conversation not found in cache");
            return;
        }

        let messageListResponse: MessageListResponse = await chatService.fetchAllMessages(conversation.id);
        let messages = messageListResponse.messages;
        console.log("Messages: ", messages);

        expect(messages.length).toBeGreaterThan(0);
    });

    // it("Fetch all messages for Client Two", async () => {

    // });
});