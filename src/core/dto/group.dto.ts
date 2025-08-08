import { ProfileAccess } from "@shared/enums";

/**
 * Create Group Request DTO
 * Used for creating new groups
 */
export interface CreateGroupRequest {
  groupName: string;
  bio?: string;
  accountType?: ProfileAccess;
}

/**
 * Update Group Request DTO
 * Used for updating existing groups
 */
export interface UpdateGroupProfileRequest {
  groupName: string;
  bio: string;
  accountType: ProfileAccess;
}

/**
 * Group Response DTO
 * Used for returning group data
 */
export interface GroupResponse {
  id: string;
  groupName: string;
  bio?: string;
  owners: string[];
  members: string[];
  requests: string[];
  accountType: ProfileAccess;
}

export interface UserGroupsResponse {
  userId: string;
  groups: GroupResponse[];
}
