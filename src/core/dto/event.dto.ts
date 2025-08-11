import { EventStatus } from "../enums";

export interface Alert {
  alertTime: Date;
  isCompleted: boolean;
}

export interface EventRequest {
  title: string;
  admin: string[];
  invitees?: string[];
  startTime: Date;
  endTime?: Date;
  location?: string;
  description?: string;
  alerts?: Alert[];
  tags?: string[];
}

export interface EventResponse {
  id: string;
  title: string;
  admin: string[];
  invitees: string[];
  startTime: Date;
  endTime: Date;
  location: string;
  description: string;
  alerts: Alert[];
  tags: string[];
}

export interface UserEventRequest {
  eventId: string;
  status: EventStatus;
}

export interface UserEventResponse {
  event: EventResponse;
  status: EventStatus;
}
