import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapters } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";
import { authenticatorProxyAda } from '../../../.history/services/dashboard-api/adapters/drivers/authenticator-proxy-adapters_20230517004724';

const compositionMock =()=> {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();

  const repoQuerierStub = new RepoQuerierStub();

  const dashboardApiMock = new DashboardApi( controlAuthenticatorStub, repoQuerierStub);

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapters( dashboardApiMock);

  return {
    authenticatorProxyAdapter,
  };

};

export const {authenticatorProxyAdapter}