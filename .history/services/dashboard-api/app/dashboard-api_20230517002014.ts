import { ForRepoQuerying } from "../ports/drivens";
import { AuthDetails, ForControlAuthenticating, Permissions } from "../ports/drivens/for-control-authenticating";
import { AuthenticatedUser } from "../ports/drivers";


export class DashboardApi implements ForControlAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ){}
  getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    throw new Error("Method not implemented.");
  }
getPermissions(email: string, password: string): Promise<Permissions> {
    throw new Error("Method not implemented.");
  }
;
  async login(email: string, password: string): Promise<AuthenticatedUser>{
    const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
    const permissions = await this.controlAuthenticator.getPermissions(email, password);
    const user = await this.repoQuerier.getUser(email);
      return {
        ...user,
        ...authDetails,
        ...permissions
      };
  }
  async register(user: any, password: string): Promise<AuthenticatedUser>{
    const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password);
    const permissions = await this.controlAuthenticator.getPermissions(user.email, password);
    const newUser = await this.repoQuerier.createUser(user, password);
      return {
        ...newUser,
        ...authDetails,
        ...permissions
      };
  }
}
