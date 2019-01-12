import EvertokUserService from './EvertokUserService';

export default class EvertokUserServiceImpl implements EvertokUserService {
  getCurrentlyConnectedUsers(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default[] {
    throw new Error("Method not implemented.");
  }
  getSpotUsers(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default[] {
    throw new Error("Method not implemented.");
  }
  isUserVisitedSpot(user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default, spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): boolean {
    throw new Error("Method not implemented.");
  }
  getUser(userId: string): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default {
    throw new Error("Method not implemented.");
  }
  getUsers(userFilter: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/UserFilter").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default[] {
    throw new Error("Method not implemented.");
  }
  deleteUser(userId: string): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default {
    throw new Error("Method not implemented.");
  }
  updateUser(updatedUser: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default {
    throw new Error("Method not implemented.");
  }
  createUser(newUser: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default {
    throw new Error("Method not implemented.");
  }
  
  private isRemoteExecution: boolean = false;

  isRemote(): boolean {
      return this.isRemoteExecution;
  }


}
