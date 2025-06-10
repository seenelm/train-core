export interface SocialLinkRequest {
  platform: string;
  url: string;
}

export interface UserProfileRequest {
  userId: string;
  username: string;
  name: string;
  bio?: string;
  accountType: number;
  profilePicture?: string;
  role?: string[];
  socialLinks?: SocialLinkRequest[];
}
