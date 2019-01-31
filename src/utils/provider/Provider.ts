import ProviderType from './ProviderType';

/**
 * @description Contract to be implemented by service providers
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Provider {
  getId(): ProviderType;
}
