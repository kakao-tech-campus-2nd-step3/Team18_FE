export interface OAuthResponse {
  accessToken: string;
  type: 'first' | 'employee' | 'employer';
  profileImage: string;
  name: string;
}

export interface RegisterResponse {
  status: boolean;
}
