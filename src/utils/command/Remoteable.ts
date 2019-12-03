/**
 * @description Contract that must be implemented by services that can be executed remotely
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Remoteable {
  isRemote(): boolean;
}
