import GeoLocationService from './GeoLocationService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl implements GeoLocationService {
    private isRemoteExecution: boolean = false;

    isRemote(): boolean {
        return this.isRemoteExecution;
    }
}