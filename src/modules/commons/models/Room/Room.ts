import Resource from '../../../../utils/resource/Resource';

/**
 * A @Room represents a persistible conversation where a group of @User can exchange @Message
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Room extends Resource {
  /**
   *@returns the name of the Room
   */
  getName(): string;
}
