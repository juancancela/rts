import Provider from './Provider';
import ProviderType from '../constant/ProviderType';

/**
 * @description base class to be used by service providers
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractBaseProvider implements Provider {
  private provider: ProviderType;

  constructor(provider: ProviderType) {
    this.provider = provider;
  }

  getId(): ProviderType {
    return this.provider;
  }
}

export default AbstractBaseProvider;
