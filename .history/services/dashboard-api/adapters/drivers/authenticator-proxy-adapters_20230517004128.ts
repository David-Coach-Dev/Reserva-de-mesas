import { ForAuthenticating } from "../../ports/drivers";

export class authenticatorProxyAdapetrs implements ForAuthenticating{
  login: (email: string, password: string) => Promise<AuthenticatedUser>;
}