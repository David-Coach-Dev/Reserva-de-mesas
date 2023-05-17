

export interface ForAuthenticating {
  login:(email: string, password: string) => Promise<AuthenticatedUse>;
  register:(user: User, password: string) => Promise<AuthenticatedUser>;
}