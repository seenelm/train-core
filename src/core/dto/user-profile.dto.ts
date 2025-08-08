import { ProfileAccess, CustomSectionType, SocialPlatform } from "../enums";
/**
 * Basic user profile info request DTO
 */
export interface BasicUserProfileInfoRequest {
  username: string;
  name: string;
  bio?: string;
  accountType: ProfileAccess;
  profilePicture?: string;
  role?: string;
  location?: string;
}

/**
 * Certification request DTO
 */
export interface CertificationRequest {
  certification: string;
  specializations: string[];
  receivedDate: string;
}

// Base interfaces for different types of custom section details
export interface AchievementItem {
  title: string;
  date?: string;
  description?: string;
}

export interface StatsItem {
  category: string;
  value: string;
}

/* Deprecate this interface */
export interface CustomSectionRequest {
  title: CustomSectionType;
  details: AchievementItem[] | StatsItem[] | string[];
}

export interface SocialLinkRequest {
  platform: SocialPlatform;
  url: string;
}

export interface UserProfileRequest {
  userId: string;
  username: string;
  name: string;
  bio?: string;
  accountType: ProfileAccess;
  profilePicture?: string;
  role?: string;
  location?: string;
  socialLinks?: SocialLinkRequest[];
  certifications?: CertificationRequest[];
  customSections?: CustomSectionRequest[];
}

export interface UserProfileResponse {
  userId: string;
  username: string;
  name: string;
  bio?: string;
  accountType: ProfileAccess;
  profilePicture?: string;
  role?: string;
  location?: string;
  socialLinks?: SocialLinkResponse[];
  certifications?: CertificationResponse[];
  customSections?: CustomSectionResponse[];
}
/* Deprecate this interface */
export interface CustomSectionResponse {
  title: CustomSectionType;
  details: AchievementItem[] | StatsItem[] | string[];
}

/**
 * Certification response DTO
 */
export interface CertificationResponse {
  id: string;
  name: string;
  issuer: string;
  imageURL: string;
  certType: string;
  specializations: string[];
}

/**
 * Social link response DTO
 */
export interface SocialLinkResponse {
  platform: SocialPlatform;
  url: string;
}

export interface PaginationRequest {
  page: number;
  limit: number;
}

export interface PaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// Cursor-based pagination request
export interface CursorPaginationRequest {
  limit: number;
  cursor?: string; // Base64 encoded cursor
}

// Cursor-based pagination response
export interface CursorPaginationResponse<T> {
  data: T[];
  pagination: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextCursor?: string;
    previousCursor?: string;
  };
}

// Minimal user info for follow lists (performance optimized)
export interface FollowUserInfo {
  userId: string;
  username: string;
  name: string;
  profilePicture?: string;
  isFollowing?: boolean; // If requesting user is following this user
}

// Follow statistics (fast, cached)
export interface FollowStatsResponse {
  userId: string;
  followersCount: number;
  followingCount: number;
  isFollowing?: boolean;
}

// Followers response
export interface FollowersResponse
  extends CursorPaginationResponse<FollowUserInfo> {}

// Following response
export interface FollowingResponse
  extends CursorPaginationResponse<FollowUserInfo> {}

// Search within followers/following
export interface FollowSearchRequest extends CursorPaginationRequest {
  searchTerm: string;
}

export interface FollowSearchResponse
  extends CursorPaginationResponse<FollowUserInfo> {}
