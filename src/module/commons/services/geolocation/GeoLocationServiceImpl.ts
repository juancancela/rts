import GeoLocationService from './GeoLocationService';

export default class GeoLocationServiceImpl implements GeoLocationService {
    private isRemoteExecution: boolean = false;

    isRemote(): boolean {
        return this.isRemoteExecution;
    }
}