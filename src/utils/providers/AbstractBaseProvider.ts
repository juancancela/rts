import Provider from "./Provider";
import Providers from "./Providers";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractBaseProvider implements Provider {
    private providerType: Providers;
    constructor(provider: Providers) {
        this.providerType = provider;
    }
    getId(): Providers {
        return this.providerType;
    }
}

export default AbstractBaseProvider;