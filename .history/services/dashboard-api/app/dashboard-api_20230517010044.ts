import { ForRepoQuerying } from "../ports/drivens";
import { AuthDetails, ForControlAuthenticating, Permissions } from "../ports/drivens/for-control-authenticating";
import { AuthenticatedUser, User } from "../ports/drivers";


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
  async login(email: string, password: string): Promise<AuthenticatedUser>{
    const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
    const permissions = await this.controlAuthenticator.getPermissions(email, password);
    const user = await this.repoQuerier.getUser(email);
    console.log('Login', user);
    const result = {
      ...user,
      ...authDetails,
      ...permissions
    };
    return result;
  }
  async register(user: User, password: string): Promise<AuthenticatedUser>{
    const newUser= await this.repoQuerier.createUser(user, password);
    const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password);
    const permissions = await this.controlAuthenticator.getPermissions(user.email, password);
    console.log('', user);
    return {
      ...newUser,
      ...authDetails,
      ...permissions
    }
  }
}
