import { ControlAuthenticatorStub } from "../adapters/drivens";
import { DashboardApi } from "./dashboard-api";

const compositionMock =()=> {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();

  
  const dashboardApiMock = new DashboardApi();

}