/**
 * User-related Data Transfer Objects (DTOs)
 * Shared between frontend and backend applications
 */

/**
 * User registration request DTO
 */
export interface UserRequest {
  username?: string;
  name: string;
  password: string;
  isActive?: boolean;
  email: string;
  authProvider?: string;
  deviceId: string;
}

/**
 * Helper function to update user request data
 */
export function updateUserRequest(
  userRequest: UserRequest,
  updatedData: Partial<UserRequest>
): UserRequest {
  return { ...userRequest, ...updatedData };
}

/**
 * User login request DTO
 */
export interface UserLoginRequest {
  email: string;
  password: string;
  deviceId: string;
}

/**
 * User response DTO (returned after successful authentication)
 */
export interface UserResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  name: string;
}

/**
 * Google authentication request DTO
 */
export interface GoogleAuthRequest {
  idToken: string;
  name?: string;
  deviceId: string;
}

/**
 * Refresh token response DTO
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

/**
 * Refresh token request DTO
 */
export interface RefreshTokenRequest {
  refreshToken: string;
  deviceId: string;
}

/**
 * Logout request DTO
 */
export interface LogoutRequest {
  refreshToken: string;
  deviceId: string;
}

/**
 * Request password reset request DTO
 */
export interface RequestPasswordResetRequest {
  email: string;
}

/**
 * Reset password with code request DTO
 */
export interface ResetPasswordWithCodeRequest {
  email: string;
  resetCode: string;
  newPassword: string;
}
