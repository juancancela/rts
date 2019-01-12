import UserService from './UserService';

export default class UserServiceImpl implements UserService {
  private isRemoteExecution: boolean = false;

  isRemote(): boolean {
    return this.isRemoteExecution;
  }
  getUser(
    userId: string
  ): import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default {
    throw new Error('Method not implemented.');
  }
  getUsers(
    userFilter: import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/UserFilter').default
  ): import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default[] {
    throw new Error('Method not implemented.');
  }
  deleteUser(
    userId: string
  ): import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default {
    throw new Error('Method not implemented.');
  }
  updateUser(
    updatedUser: import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default
  ): import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default {
    throw new Error('Method not implemented.');
  }
  createUser(
    newUser: import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default
  ): import('/Users/Aetion/Documents/projs/rt/evertok-rt-api/src/module/commons/services/user/models/User/User').default {
    throw new Error('Method not implemented.');
  }
}
