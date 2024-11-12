export interface OAuthRequest {
  code: string;
}

export interface RegisterRequest {
  type: 'employee' | 'employer';
}
