import { ObjectId } from 'mongodb';
import { InitMessageRequest } from './messageRequest';

export interface UserRequest {
    id: ObjectId;
    name: string;
}
  
export interface ConversationRequest {
    name?: string;
    owner_id: ObjectId;
    owner_name: string;
    members: UserRequest[];
    created_at: Date;
}

export interface CreateConversation {
    conversation_request: ConversationRequest;
    init_message_request: InitMessageRequest;
}