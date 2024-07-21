import { io, Socket } from "socket.io-client";
import { CreateConversation, MessageRequest } from "../model/request/chatClientRequest";
import { CreateConversationResponse, MessageResponse } from "../model/response/chatClientResponse";
import { ObjectId } from "mongodb";

class ChatClient {
    private socket: Socket;

    constructor() {
        this.socket = io("http://localhost:3001");
    }

    public createSocketConnection(user_id: ObjectId) {
        this.socket.emit("join", user_id);
    }

    public handleJoinConversation(conversation_id: ObjectId) {
        this.socket.emit("join-chat", conversation_id);
    }

    public waitForConnection(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.on("connect", () => {
                console.log("Connected to server");
                resolve();
            });

            this.socket.on("connect_error", (error: Error) => {
                console.error("Failed to connect to server: ", error);
                reject(error);
            });
        });
    }

    public createConversation(createConversationRequest: CreateConversation) {
        this.socket.emit("create-chat", createConversationRequest);
    }

    public handleCreateConversation(): Promise<CreateConversationResponse> {
        return new Promise((resolve, reject) => {
            this.socket.on("create-chat-response", (response: CreateConversationResponse) => {
                console.log("Received create-conversation-response: ", response);
                resolve(response);
            });

            this.socket.on("error", (error: any) => {
                console.error("Error: ", error);
                reject(error);
            });
        });
    }

    public sendMessage(message: MessageRequest) {
        this.socket.emit("new-message", message);
    }

    public handleMessage(): Promise<MessageResponse> {
        return new Promise((resolve, reject) => {
            this.socket.on("chat-message", (response: MessageResponse) => {
                console.log("Received message-response: ", response);
                resolve(response);
            });
        });
    }
    

    public disconnect() {
        this.socket.disconnect();
    }
}

export default ChatClient;