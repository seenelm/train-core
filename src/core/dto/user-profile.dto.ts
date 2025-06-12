import { ProfileAccess, CustomSectionType } from "@shared/enums";

// TODO: Add enums for API error types and CustomSectionTypes

export interface SocialLinkRequest {
  platform: string;
  url: string;
}

export interface CustomSectionRequest {
  title: CustomSectionType;
  details: Record<string, string>[];
}

export interface UserProfileRequest {
  userId: string;
  username: string;
  name: string;
  bio?: string;
  accountType: ProfileAccess;
  profilePicture?: string;
  role?: string;
  socialLinks?: SocialLinkRequest[];
  location?: string;
}
