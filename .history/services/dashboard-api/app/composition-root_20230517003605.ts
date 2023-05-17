import { ControlAuthenticatorStub } from "../adapters/drivens";
import { DashboardApi } from "./dashboard-api";

const compositionMock =()=> {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  const dashboardApiMock = new DashboardApi();

}