import { ObjectId } from "mongodb";
import { MessageResponse } from "./messageResponse";

export interface UserResponse {
    id: ObjectId;
    name: string;
}

export interface ConversationResponse {
    id: ObjectId;
    name: string;
    owner_id: ObjectId;
    owner_name: string;
    members: UserResponse[];
    created_at: Date;
    updated_at: Date;
}

export interface ConversationListResponse {
    conversations: ConversationResponse[];
}

export interface CreateConversationResponse {
    conversation_response: ConversationResponse,
    message_response: MessageResponse,
}