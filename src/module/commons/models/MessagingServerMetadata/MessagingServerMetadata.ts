import BaseResource from '../../utils/resources/BaseResource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingServerMetadata extends BaseResource {
  getInfo(): string;
  getStatistics(): string;
}
