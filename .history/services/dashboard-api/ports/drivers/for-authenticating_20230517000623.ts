export interface AuthenticatedUser{
  id: string;
  name: string;
  email: string;
  password: string;
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>

export interface ForAuthenticating {
  login:(email: string, password: string) => Promise<AuthenticatedUser>;
  register:(user: string, password: string) => Promise<AuthenticatedUser>;
}