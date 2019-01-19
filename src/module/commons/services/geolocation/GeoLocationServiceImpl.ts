import GeoLocationService from './GeoLocationService';
import Commandable from '../../../../utils/command/Commandable';
import User from '../user/models/User/User';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Modules from '../../../../utils/modules/Modules';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl implements GeoLocationService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  getUserLocation(user: User): GeoLocation {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'geoLocationService';
  }
}
