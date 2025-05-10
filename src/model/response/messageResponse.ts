import { ObjectId } from "mongodb";

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