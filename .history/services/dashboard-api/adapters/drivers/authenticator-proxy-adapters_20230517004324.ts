import { AuthenticatedUser, ForAuthenticating, User } from "../../ports/drivers";
import { dashboard } from '../../../../.history/services/dashboard-api/app/dashboard-api_20230516233403';

export class authenticatorProxyAdapetrs implements ForAuthenticating{

  constructor(private readonly dashboard)

  login: (email: string, password: string) => Promise<AuthenticatedUser>;
  register: (user: User, password: string) => Promise<AuthenticatedUser>;
}