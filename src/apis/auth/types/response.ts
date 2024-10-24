export interface OAuthResponse {
  accessToken: string;
  type: 'first' | 'employee' | 'employer';
  profileImage: string;
}

export interface RegisterResponse {
  status: boolean;
}
