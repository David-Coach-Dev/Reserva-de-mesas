import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser } from "../../app/schemas";
import { ForAuthenticating, } from "../../ports/drivers";

export class AuthenticatorProxyAdapters implements ForAuthenticating{

  constructor(private readonly dashboard: DashboardApi){}

  async login(email: string, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.login(email, password);
  };
  async register(user: User, password: string): Promise<AuthenticatedUser>{
    return this.dashboard.register(user, password);
  };
}
