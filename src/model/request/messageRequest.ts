import { ObjectId } from 'mongodb';

export interface MessageRequest {
    sender_id: ObjectId;
    conversation_id: ObjectId;
    text: string;
    created_at: Date;
}
  
export interface InitMessageRequest {
    sender_id: ObjectId;
    text: string;
    created_at: Date;
}