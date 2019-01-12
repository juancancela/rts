import AuthorizationService from "./AuthorizationService";

export default class AuthorizationServiceImpl implements AuthorizationService {
    private isRemoteExecution: boolean = false;

    isRemote(): boolean {
        return this.isRemoteExecution;
    }
}