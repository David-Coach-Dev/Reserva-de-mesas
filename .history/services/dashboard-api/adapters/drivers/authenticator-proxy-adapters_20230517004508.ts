import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser, ForAuthenticating, User } from "../../ports/drivers";

export class authenticatorProxyAdapetrs implements ForAuthenticating{

  constructor(private readonly dashboard: DashboardApi){}

  async login(email: string, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.login(email, password);
  };
  ansyc register(user: User, password: string): Promise<AuthenticatedUser>;
}