import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser, ForAuthenticating, User } from "../../ports/drivers";

export class authenticatorProxyAda/* There is no variable `p` in the provided code, so it is not doing
anything. */
petrs implements ForAuthenticating{

  constructor(private readonly dashboard: DashboardApi){}

  async login(email: string, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.login(email, password);
  };
  async register(user: User, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.register(user, password);
  };
}
