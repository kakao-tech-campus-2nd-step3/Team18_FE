export interface OAuthRequest {
  token: string;
}

export interface RegisterRequest {
  type: 'employee' | 'employer';
}
