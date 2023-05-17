import { ForRepoQuerying } from "../ports/drivens";
import { AuthDetails, ForControlAuthenticating, Permissions } from "../ports/drivens/for-control-authenticating";
import { AuthenticatedUser, User } from "../ports/drivers";


export class DashboardApi implements ForControlAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ){}
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
  async register(user: User, password: string): Promise<AuthenticatedUser>{
    const newUser= awit this.repoQuerier.createUser(user, password);
  }
}
