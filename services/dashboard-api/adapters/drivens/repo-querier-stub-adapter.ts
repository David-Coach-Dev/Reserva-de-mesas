import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser={
  id: '1',
  name: 'Dc Dev',
  email: 'dcdevtk@gmail.com',
}

export class RepoQuerierStub implements ForRepoQuerying{
  getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
  createUser(_user: any, _password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
