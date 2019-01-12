import AuthenticationService from "./AuthenticationService";

export default class AuthenticationServiceImpl implements AuthenticationService {
    login(identity: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/models/Identity/Identity").default): boolean {
        throw new Error("Method not implemented.");
    }
    signUp(identity: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/models/Identity/Identity").default, user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default {
        throw new Error("Method not implemented.");
    }
    recoverPassword(identity: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/models/Identity/Identity").default): void {
        throw new Error("Method not implemented.");
    }
    private isRemoteExecution: boolean = false;

    isRemote(): boolean {
        return this.isRemoteExecution;
    }
}