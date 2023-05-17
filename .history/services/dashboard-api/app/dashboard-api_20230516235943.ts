import { ForRepoQuerying } from "../ports/drivens";
import { ForControlAuthenticating } from "../ports/drivens/for-control-authenticating";


export class DashboardApi implements ForControlAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ){};
  asy
}