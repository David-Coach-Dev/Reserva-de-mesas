import { ForRepoQuerying } from "../ports/drivens";
import { ForControlAuthenticating } from "../ports/drivens/for-control-authenticating";
import { AuthenticatedUser } from "../ports/drivers";


export class DashboardApi implements ForControlAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ){};
  async login(email: string, password: string): Promise<AuthenticatedUser>{
    const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
    
  }
}