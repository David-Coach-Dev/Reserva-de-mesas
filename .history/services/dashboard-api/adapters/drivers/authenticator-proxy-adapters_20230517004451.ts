import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser, ForAuthenticating, User } from "../../ports/drivers";

export class authenticatorProxyAdapetrs implements ForAuthenticating{

  constructor(private readonly dashboard: DashboardApi){}

  alogin: (email: string, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.login(email, password);
  };
  register: (user: User, password: string): Promise<AuthenticatedUser>;
}