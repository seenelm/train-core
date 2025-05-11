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
}

/**
 * User response DTO (returned after successful authentication)
 */
export interface UserResponse {
  userId: string;
  token: string;
  username: string;
  name: string;
}

/**
 * Google authentication request DTO
 */
export interface GoogleAuthRequest {
  idToken: string;
  name?: string;
}
