import Command from './Command';

/**
 * @description Interface that needs to be implemented by services that can be executed remotely.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Commandable {
  getCommand(): Command;
}
