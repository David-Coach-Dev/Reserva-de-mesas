export interface AuthenticatedUser{
  id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>