import { GroupResponse } from "./group.dto";
import { UserProfileResponse } from "./user-profile.dto";

export interface SearchProfilesResponse {
  userProfiles: UserProfileResponse[];
  groups: GroupResponse[];
}
