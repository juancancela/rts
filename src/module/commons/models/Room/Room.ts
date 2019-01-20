import Resource from '../../utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Room extends Resource {
  getName(): string;
}
