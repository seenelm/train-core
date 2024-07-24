import { ObjectId } from "mongodb";

export interface ConversationResponse {
    id: ObjectId;
    name: string;
    owner_id: ObjectId;
    members: ObjectId[];
    created_at: Date;
    updated_at: Date;
}

export interface ConversationListResponse {
    conversations: ConversationResponse[];
}

export interface MessageResponse {
    id: ObjectId;
    sender_id: ObjectId;
    conversation_id: ObjectId;
    text: string;
    created_at: Date;
}

export interface MessageListResponse {
    messages: MessageResponse[];
}