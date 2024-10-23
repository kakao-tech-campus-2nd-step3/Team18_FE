export interface OAuthResponse {
  accessToken: string;
  type: 'first' | 'employee' | 'employer';
  profileImage: string;
}
