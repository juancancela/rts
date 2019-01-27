import ProviderType from '../constant/ProviderType';

export default interface Provider {
  getId(): ProviderType;
}
