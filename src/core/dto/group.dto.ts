import { ProfileAccess } from "@shared/enums";

export interface CreateGroupRequest {
  groupName: string;
  userId: string;
}

export interface UpdateGroupRequest {
  groupName: string;
  bio: string;
  accountType: ProfileAccess;
}

export interface GroupResponse {
  id: string;
  groupName: string;
  bio: string;
  owners: string[];
  members: string[];
  requests: string[];
  accountType: ProfileAccess;
}
