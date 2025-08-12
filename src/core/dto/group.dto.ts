import { ProfileAccess } from "../enums";
import { ProgramResponse } from "./program.dto";

export interface GroupRequest {
  name: string;
  description?: string;
  accountType: ProfileAccess;
  location?: string;
  tags?: string[];
}

/**
 * Create Group Request DTO
 * Used for creating new groups
 */
export interface CreateGroupRequest {
  name: string;
  description?: string;
  accountType: ProfileAccess;
  location?: string;
  tags?: string[];
}

/**
 * Update Group Request DTO
 * Used for updating existing groups
 */
export interface UpdateGroupProfileRequest {
  name?: string;
  description?: string;
  accountType: ProfileAccess;
  location?: string;
  tags?: string[];
}

/**
 * Group Response DTO
 * Used for returning group data
 */
export interface GroupResponse {
  id: string;
  name: string;
  description: string;
  location: string;
  tags: string[];
  owners: string[];
  members: string[];
  requests: string[];
  accountType: ProfileAccess;
}

export interface UserGroupsResponse {
  userId: string;
  groups: GroupResponse[];
}

export interface GroupProgramsResponse {
  groupId: string;
  programs: ProgramResponse[];
}
