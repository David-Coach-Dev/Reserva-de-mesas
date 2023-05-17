export interface AuthDetails{
  token: string;
  refreshToken: string;
}
export interface Permissions{
  admin: boolean;
  user: boolean;
}
ForControlAuthenticating
export interface {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(email: string, password: string): Promise<Permissions>;

}