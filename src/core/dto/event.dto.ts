import { EventStatus } from "@shared/enums";

export interface Alert {
  alertTime: Date;
  isCompleted: boolean;
}

export interface EventRequest {
  name: string;
  admin: string[];
  invitees?: string[];
  startTime: Date;
  endTime?: Date;
  location?: string;
  description?: string;
  alerts?: Alert[];
}

export interface EventResponse {
  id: string;
  name: string;
  admin: string[];
  invitees?: string[];
  startTime: Date;
  endTime?: Date;
  location?: string;
  description?: string;
  alerts?: Alert[];
}

export interface UserEventRequest {
  eventId: string;
  status: EventStatus;
}

export interface UserEventResponse {
  event: EventResponse;
  status: EventStatus;
}
